// 设置“新闻发布”页面（/news-admin/）的密码。由网站负责人在自己电脑上运行：
//   node scripts/news-key.mjs
// 按提示粘贴 GitHub 钥匙（只给本仓库 Actions 读写权限的 fine-grained token），再设一个密码。
// 钥匙会用这个密码加密后写入 src/data/news-key.json；网站上只有加密后的内容，不知道密码无法使用。
// 发布页里输入同一个密码即可解锁。换密码或钥匙过期：重新运行本命令，然后提交部署。
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline';

const ITER = 600000;
const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/news-key.json');

function ask(question, hidden) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    if (hidden) rl._writeToOutput = (s) => { if (s.includes(question)) process.stdout.write(s); };
    rl.question(question, (a) => { rl.close(); if (hidden) process.stdout.write('\n'); resolve(a.trim()); });
  });
}

const token = await ask('粘贴 GitHub 钥匙（不会显示）：', true);
if (!/^(github_pat_|ghp_)\w+/.test(token)) { console.error('这不像是 GitHub 钥匙（应以 github_pat_ 开头）。'); process.exit(1); }
const pw = await ask('设置发布页密码（至少 10 位，不会显示）：', true);
if (pw.length < 10) { console.error('密码太短，至少 10 位。'); process.exit(1); }
if ((await ask('再输一遍密码：', true)) !== pw) { console.error('两次密码不一致。'); process.exit(1); }

const salt = randomBytes(16), iv = randomBytes(12);
const key = pbkdf2Sync(pw, salt, ITER, 32, 'sha256');
const c = createCipheriv('aes-256-gcm', key, iv);
const data = Buffer.concat([c.update(token, 'utf8'), c.final(), c.getAuthTag()]); // 与浏览器 WebCrypto AES-GCM 格式一致
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ v: 1, iter: ITER, salt: salt.toString('base64'), iv: iv.toString('base64'), data: data.toString('base64'), set: new Date().toISOString().slice(0, 10) }, null, 2) + '\n');
console.log(`已写入 ${path.relative(process.cwd(), out)}。提交并部署后，发布页即可用这个密码解锁。`);
