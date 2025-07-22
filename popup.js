document.querySelectorAll(".attack-btn").forEach(button => {
    button.addEventListener("click", () => {
      const attack = button.dataset.attack;
      const target = document.getElementById("urlInput").value;
      if (!target || !target.startsWith("http")) {
        alert("Please enter a valid URL first.");
        return;
      }
  
      browser.runtime.sendMessage({
        action: "launchAttack",
        folderName: attack,
        target: target
      });
    });
  });
  
  // Header checker
  document.getElementById("checkBtn").addEventListener("click", async () => {
    const url = document.getElementById("urlInput").value;
    const resultBox = document.getElementById("result");
  
    if (!url.startsWith("http")) {
      resultBox.textContent = "Please enter a valid URL.";
      return;
    }
  
    try {
      const response = await fetch(url, { method: "HEAD", mode: "cors" });
      const xfo = response.headers.get("x-frame-options");
      const csp = response.headers.get("content-security-policy");
  
      let output = "";
      if (!xfo) output += "🚨 X-Frame-Options header is missing.\n";
      else output += `✅ X-Frame-Options: ${xfo}\n`;
  
      if (!csp || !csp.includes("frame-ancestors"))
        output += "⚠️ CSP frame-ancestors directive is missing.";
      else output += `✅ CSP: frame-ancestors found.`;
  
      resultBox.textContent = output;
    } catch (err) {
      resultBox.textContent = "Failed to fetch headers.";
    }
  });
  