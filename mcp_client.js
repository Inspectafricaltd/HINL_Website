const fs = require('fs');
const https = require('https');

const MCP_URL = "https://www.homeinspectors.ng/wp-json/mcp/elementor-mcp-server";
const AUTH = "Basic YWRtbG5seDpjemVnIGVqRlAgcjlJUiBTbEMwIGNHbDMgMXIxWg==";

async function request(url, options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({
          headers: res.headers,
          status: res.statusCode,
          body: data
        });
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  const [,, toolName, argsJsonPath] = process.argv;
  if (!toolName) {
    console.error("Usage: node mcp_client.js <toolName> [argsJsonPath]");
    process.exit(1);
  }

  let args = {};
  if (argsJsonPath && fs.existsSync(argsJsonPath)) {
    args = JSON.parse(fs.readFileSync(argsJsonPath, 'utf8'));
  } else if (argsJsonPath) {
    args = JSON.parse(argsJsonPath);
  }

  // 1. Initialize session
  const initBody = JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: { name: "antigravity", version: "1.0.0" }
    }
  });

  const initRes = await request(MCP_URL, {
    method: 'POST',
    headers: {
      'Authorization': AUTH,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(initBody)
    }
  }, initBody);

  const sessionId = initRes.headers['mcp-session-id'];
  if (!sessionId) {
    console.error("Failed to get session ID", initRes.body);
    process.exit(1);
  }

  // 2. Call tool
  const callBody = JSON.stringify({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/call",
    params: {
      name: toolName,
      arguments: args
    }
  });

  const callRes = await request(MCP_URL, {
    method: 'POST',
    headers: {
      'Authorization': AUTH,
      'Content-Type': 'application/json',
      'Mcp-Session-Id': sessionId,
      'Content-Length': Buffer.byteLength(callBody)
    }
  }, callBody);

  console.log(callRes.body);
}

main().catch(console.error);
