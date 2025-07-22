browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "launchAttack") {
      const externalUrl = `http://localhost:8000/attacks/${message.folderName}/poc.html?target=${message.target}`;
      browser.tabs.create({ url: externalUrl });
    }
  });
  