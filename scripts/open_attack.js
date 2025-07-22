browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "launchAttack") {
      const url = browser.runtime.getURL(`attacks/${message.folderName}/poc.html?target=${message.target}`);
      browser.tabs.create({ url });
    }
  });
  