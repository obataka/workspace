chrome.action.onClicked.addListener((tab) => {
  // jQueryを先に実行
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['jquery.min.js']
  }, () => {
    // jQueryの読み込み後にscript.jsを実行
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['script.js']
    });
  });
});
