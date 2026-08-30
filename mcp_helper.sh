#!/bin/bash
# MCP Helper Script for HINL Migration
# Usage: ./mcp_helper.sh <tool_name> '<json_arguments>'

MCP_URL="https://www.homeinspectors.ng/wp-json/mcp/elementor-mcp-server"
AUTH="Basic YWRtbG5seDpjemVnIGVqRlAgcjlJUiBTbEMwIGNHbDMgMXIxWg=="

# Initialize session
init_session() {
    SESSION_ID=$(curl -s -i -X POST "$MCP_URL" \
        -H "Authorization: $AUTH" \
        -H "Content-Type: application/json" \
        -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"antigravity","version":"1.0.0"}}}' \
        | grep -i "mcp-session-id" | awk '{print $2}' | tr -d '\r\n')
    echo "$SESSION_ID"
}

# Call a tool
call_tool() {
    local session_id="$1"
    local tool_name="$2"
    local arguments="$3"
    local call_id="${4:-2}"
    
    curl -s -X POST "$MCP_URL" \
        -H "Authorization: $AUTH" \
        -H "Content-Type: application/json" \
        -H "Mcp-Session-Id: $session_id" \
        -d "{\"jsonrpc\":\"2.0\",\"id\":$call_id,\"method\":\"tools/call\",\"params\":{\"name\":\"$tool_name\",\"arguments\":$arguments}}"
}

# Main
TOOL_NAME="$1"
TOOL_ARGS="${2:-{}}"

SESSION_ID=$(init_session)
if [ -z "$SESSION_ID" ]; then
    echo "ERROR: Failed to get session ID"
    exit 1
fi

call_tool "$SESSION_ID" "$TOOL_NAME" "$TOOL_ARGS"
