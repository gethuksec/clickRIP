# 🛡️ ClickRip – Firefox Clickjacking Extension

ClickRip is a Firefox browser extension for demonstrating clickjacking vulnerabilities on websites that lack X-Frame-Options or CSP frame-ancestors headers.
Created by **Gethuk Security** ([@gethuksec](https://github.com/gethuksec))

> Developed by **Gethuk Security** for educational and ethical penetration testing purposes only.

![exampleUse](https://github.com/user-attachments/assets/fdbacdd1-f670-4d71-8383-dda8d5f774a1)

---

## 📜 Disclaimer

This browser extension is intended strictly for **educational** use and **authorized penetration testing**.  
Do **not** use this tool on websites you do not own or do not have written permission to test.  

The author assumes **no responsibility** for misuse or damage caused by this tool.  
See [disclaimer.html](disclaimer.html) for the full disclaimer.

---

## 🚀 Getting Started

This guide will help you:

1. Serve the extension files locally using Python.
2. Load the extension into Firefox manually for testing.
3. Execute clickjacking PoC payloads.

---

## Step 1: Start a Local HTTP Server

You’ll need to serve the project files to allow the browser to access PoCs and related assets.

### ✅ Requirements

- Python 3 (usually already installed on most systems)

### ▶️ Start the Server

Open your terminal or command prompt, navigate to the extension folder, and run:

```bash
python -m http.server 8000
```

## Step 2: Load Extension in Firefox

To test your extension, you’ll need to load it manually into Firefox:

### 📥 Load the Extension Temporarily

1. Open **Firefox**.
2. In the address bar, go to:  
   👉 `about:debugging#/runtime/this-firefox`
3. Click the button:  
   **“Load Temporary Add-on…”**
4. In the file selection dialog, choose the file:  
   **`manifest.json`**  
   *(located in the root folder of your extension project)*
5. You should now see your extension listed under **Temporary Extensions**.

> 📝 **Note**: This method is **temporary**. The extension will be unloaded automatically when Firefox is restarted.

