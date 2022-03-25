chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(changeInfo,tab)
    setTimeout(function () {
        chrome.tabs.sendMessage(tabId, tab.url)
    }, 4000);

});