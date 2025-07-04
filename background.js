// List of keywords to block
const blockedSites = ["porn", "gamble", "casino", "betting", "xxx"];

// Listen for all web requests
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    for (let keyword of blockedSites) {
      if (details.url.toLowerCase().includes(keyword)) {
        // Redirect to block page if keyword found
        return { redirectUrl: chrome.runtime.getURL("block.html") };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
