#!/usr/bin/env python3
"""PostToolUse hook: run oxlint on a JS/JSX file right after it is edited."""
import json
import os
import subprocess
import sys

try:
    data = json.load(sys.stdin)
    path = (data.get("tool_input") or {}).get("file_path", "")
except Exception:
    sys.exit(0)

if not path.endswith((".js", ".jsx", ".mjs")) or not os.path.exists(path):
    sys.exit(0)
if "/node_modules/" in path or "/dist/" in path:
    sys.exit(0)

try:
    result = subprocess.run(
        ["npx", "--no-install", "oxlint", path],
        capture_output=True, text=True, timeout=60,
    )
except Exception:
    sys.exit(0)

output = (result.stdout + result.stderr).strip()
# Only speak up when oxlint found something, so clean edits stay quiet.
if result.returncode != 0 or "warning" in output or "error" in output:
    # Exit code 2 sends the message back to Claude so it can fix the file.
    print(output[-1500:], file=sys.stderr)
    sys.exit(2)
sys.exit(0)
