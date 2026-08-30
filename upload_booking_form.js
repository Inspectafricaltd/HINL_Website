const fs = require('fs');
const https = require('https');

const MCP_URL = "https://www.homeinspectors.ng/wp-json/mcp/novamira";
const AUTH = "Basic YWRtbG5seDpjemVnIGVqRlAgcjlJUiBTbEMwIGNHbDMgMXIxWg==";

async function request(url, options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ headers: res.headers, status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  const content = fs.readFileSync('hinl-booking-form.php', 'utf8');

  // 1. Initialize session
  const initBody = JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: { protocolVersion: "2024-11-05", capabilities: {}, clientInfo: { name: "antigravity", version: "1.0.0" } }
  });

  const initRes = await request(MCP_URL, {
    method: 'POST',
    headers: { 'Authorization': AUTH, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(initBody) }
  }, initBody);

  const sessionId = initRes.headers['mcp-session-id'];
  
  // 2. Write file
  const callBody = JSON.stringify({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/call",
    params: {
      name: "novamira/write-file",
      arguments: {
        path: "wp-content/novamira-sandbox/hinl-booking-form.php",
        content: content,
        overwrite: true
      }
    }
  });

  const callRes = await request(MCP_URL, {
    method: 'POST',
    headers: { 'Authorization': AUTH, 'Content-Type': 'application/json', 'Mcp-Session-Id': sessionId, 'Content-Length': Buffer.byteLength(callBody) }
  }, callBody);

  console.log(callRes.body);
}
main().catch(console.error);
