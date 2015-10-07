chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    console.log("I'm window:" + window.location + ' and I got a message');
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    chrome.tabs.sendMessage(sender.tab.id, message);
    if (message.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
