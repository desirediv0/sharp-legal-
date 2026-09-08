// Dependency-free CDP screenshot: accepts the disclaimer gate, then captures.
const [,, url, outPath] = process.argv;
const fs = await import('node:fs');
const base = 'http://127.0.0.1:9222';
let tabs;
for (let i = 0; i < 40; i++) {
  try { tabs = await (await fetch(`${base}/json/list`)).json(); break; }
  catch { await new Promise(r => setTimeout(r, 500)); }
}
const target = tabs.find(t => t.type === 'page');
const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0; const pending = new Map();
const send = (method, params = {}) => new Promise(res => {
  const msgId = ++id; pending.set(msgId, res);
  ws.send(JSON.stringify({ id: msgId, method, params }));
});
ws.onmessage = e => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
};
await new Promise(r => ws.onopen = r);
await send('Page.enable');
// Seed sessionStorage on the right origin BEFORE the app boots.
await send('Page.addScriptToEvaluateOnNewDocument', {
  source: `try { sessionStorage.setItem('sharp_legal_disclaimer_accepted','true'); } catch (e) {}`,
});
await send('Page.navigate', { url });
await new Promise(r => setTimeout(r, 5000));
const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
fs.writeFileSync(outPath, Buffer.from(data, 'base64'));
console.log('wrote ' + outPath);
ws.close();
