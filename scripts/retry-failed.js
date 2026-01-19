#!/usr/bin/env node
import { chromium } from 'playwright';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import fs from 'fs-extra';
import path from 'path';
import PQueue from 'p-queue';
import converter from 'html-to-markdown';
import { load } from 'cheerio';
import { decode } from 'html-entities';

const BASE_URL = 'https://developer.work.weixin.qq.com';
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';
const COOKIE_FILE = path.resolve('.wecom_cookies.json');

// 之前失败的 doc_id 列表
const FAILED_DOC_IDS = [10025,10087,10088,10112,10115,10167,10786,10787,10788,11630,11631,11633,11634,11974,12250,12739,12973,12974,12975,12977,13219,13288,13292,13293,13294,13308,13450,13473,13878,14404,15104,15445,15642,15645,15836,16248,16504,16662,16666,17298,19243,19409,19412,19416,20102,23414,25254,26595,27271,27272,27284,27286,31650,31947,32022,32023,32086,32104,34646,38681,42044,42921,42923,43599,44255,44257,44259,50920,51799,51881,52390,52569,53081,53294,53295,53296,53335,53336,53337,53341,53342,53343,53346,53347,53348,53349,53350,53351,53352,53353,53354,53355,53356,53357,53358,53360,53367,53408,53411,53419,53540,53575,53659,53707,53988,53989,54006,54090,54166,54776,54785,54809,54810,54811,54963,55039,55183,55293,55301,55393,55394,55520,55652,57141,58887,59058,59062,59063,59068,59098,59137,59174,59947];

const jar = new CookieJar();
const axiosInstance = wrapper(axios.create({
  baseURL: BASE_URL,
  headers: { 'User-Agent': USER_AGENT, 'Accept': 'application/json, text/plain, */*' },
  timeout: 20000,
  withCredentials: true
}));
axiosInstance.defaults.jar = jar;

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// 导入cookies
function importCookies() {
  if (!fs.existsSync(COOKIE_FILE)) return false;
  try {
    const data = JSON.parse(fs.readFileSync(COOKIE_FILE, 'utf8'));
    if (Array.isArray(data)) {
      data.forEach(c => {
        if (c?.name && c.value !== undefined) {
          const domain = c.domain || '.work.weixin.qq.com';
          try { jar.setCookieSync(`${c.name}=${c.value}; Domain=${domain}; Path=${c.path || '/'}`, BASE_URL); } catch(e) {}
        }
      });
      return true;
    }
  } catch(e) {}
  return false;
}

// 打开浏览器登录
async function openBrowserForLogin(targetUrl) {
  console.log('\n🌐 正在打开浏览器进行登录...');
  const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  const context = await browser.newContext({ viewport: null, userAgent: USER_AGENT });
  const page = await context.newPage();
  
  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 60000 });
    console.log('⏳ 请在浏览器中完成登录/验证，完成后会自动关闭...');
    
    await page.waitForFunction(() => {
      const docContent = document.querySelector('.doc-content, .markdown-body, [class*="doc-"]');
      const loginForm = document.querySelector('[class*="login"], [class*="captcha"], [class*="verify"]');
      return docContent && !loginForm;
    }, { timeout: 300000 });
    
    console.log('✅ 登录成功！');
    const cookies = await context.cookies();
    const relevantCookies = cookies.filter(c => c.domain.includes('work.weixin.qq.com') || c.domain.includes('weixin.qq.com'));
    
    if (relevantCookies.length > 0) {
      await fs.writeJson(COOKIE_FILE, relevantCookies, { spaces: 2 });
      console.log(`💾 已保存 ${relevantCookies.length} 个 cookies`);
      relevantCookies.forEach(c => {
        try { jar.setCookieSync(`${c.name}=${c.value}; Domain=${c.domain}; Path=${c.path || '/'}`, BASE_URL); } catch(e) {}
      });
      return true;
    }
  } catch(e) {
    console.error('❌ 登录失败:', e.message);
  } finally {
    await browser.close();
  }
  return false;
}

// 获取文档内容
async function fetchDocContent(docId) {
  const headers = {
    Referer: `${BASE_URL}/document/path/${docId}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  };
  const response = await axiosInstance.post('/docFetch/fetchCnt', `doc_id=${docId}`, { headers });
  const payload = response.data;
  if (payload?.data) return payload.data;
  if (payload?.result?.errCode === 500003) throw new Error('500003 人机验证');
  if (payload?.result?.errCode) throw new Error(`${payload.result.errCode}`);
  return payload;
}

// 获取分类信息
async function fetchCategories() {
  const response = await axiosInstance.post('/docFetch/categories', {}, {
    headers: { Referer: `${BASE_URL}/document/path/90664`, 'Content-Type': 'application/json' }
  });
  return response.data?.data?.categories || response.data?.categories || [];
}

async function main() {
  console.log(`📋 准备重新抓取 ${FAILED_DOC_IDS.length} 个之前失败的文档\n`);
  
  // 尝试导入已有cookies
  const hasCookies = importCookies();
  if (hasCookies) console.log('🍪 已加载保存的 cookies\n');
  
  // 获取分类信息以便找到文件路径
  console.log('📂 获取文档目录结构...');
  const categories = await fetchCategories();
  const catMap = new Map(categories.map(c => [c.doc_id, c]));
  
  // 筛选出我们需要的文档
  const tasks = FAILED_DOC_IDS.map(docId => {
    const cat = catMap.get(docId);
    if (!cat) return null;
    return { docId, cat };
  }).filter(Boolean);
  
  console.log(`✅ 找到 ${tasks.length} 个文档的分类信息\n`);
  
  const queue = new PQueue({ concurrency: 1, intervalCap: 1, interval: 1500 });
  const stillFailed = [];
  let success = 0;
  
  // 第一轮尝试
  console.log('🚀 开始抓取...\n');
  await queue.addAll(tasks.map(({ docId, cat }) => async () => {
    try {
      const doc = await fetchDocContent(docId);
      console.log(`✅ ${cat.title}`);
      success++;
    } catch(e) {
      if (e.message.includes('500003') || e.message.includes('人机验证')) {
        stillFailed.push({ docId, cat });
        console.log(`❌ ${cat.title} - 需要验证`);
      } else {
        console.log(`❌ ${cat.title} - ${e.message}`);
      }
    }
  }));
  
  // 如果有失败的，打开浏览器登录后重试
  if (stillFailed.length > 0) {
    console.log(`\n⚠️ 有 ${stillFailed.length} 个文档需要登录验证`);
    const firstDoc = stillFailed[0];
    const loginUrl = `${BASE_URL}/document/path/${firstDoc.cat.category_id || firstDoc.docId}`;
    
    if (await openBrowserForLogin(loginUrl)) {
      console.log(`\n🔄 重试 ${stillFailed.length} 个文档...\n`);
      
      for (const { docId, cat } of stillFailed) {
        try {
          await delay(1500);
          const doc = await fetchDocContent(docId);
          console.log(`✅ ${cat.title}`);
          success++;
        } catch(e) {
          console.log(`❌ ${cat.title} - ${e.message}`);
        }
      }
    }
  }
  
  console.log(`\n✅ 完成！成功: ${success}/${tasks.length}`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
