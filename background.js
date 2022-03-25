chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    setTimeout(function () {
        chrome.tabs.sendMessage(tabId, tab.url)
    }, 2000);

});