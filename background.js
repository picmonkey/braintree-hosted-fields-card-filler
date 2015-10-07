
// Update the declarative rules on install or upgrade.
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          css: ["iframe#braintree-hosted-field-number"]
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});

chrome.pageAction.onClicked.addListener(function (tab) {
  // grab cc data
  var mock_cc = loadMockCC();
  chrome.tabs.sendMessage(tab.id, mock_cc);
});
