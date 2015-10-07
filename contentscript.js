
 function fillTestBinder() {
  if (window.location.hash === '#register/home_header') {
    $('.fill_test_data').off('click');
    $('.fill_test_data').on('click', function() {
      console.log('derp!!');
      var cardinput = $('.card_number').find('input');
      console.log("cardinput");
      console.log(cardinput);

      var message = {greeting: "hello"};
      message = {
        cc_number: '4111111111111111',
        cvv: '123',
        expirationMonth: '06',
        expirationYear: '2020',
      };

      // window.backgroundpage = chrome.extension.getBackgroundPage()
      chrome.runtime.sendMessage(message, function(response) {
        console.log(window.location.origin + " says:");
        console.log(response.farewell);
      });

    });
  } 

 }

$(document).ready(function() { 

  $(window).on('hashchange', function() {
    //.. work ..
    console.log("window.location.hash: " + window.location.hash);
    fillTestBinder()
  });

  fillTestBinder()


  // # 'click .test-card-menu li a': 'fillTestData'
  if (window.location === "https://assets.braintreegateway.com") {
    console.log("I'm in a braintree hosted frame!");
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        console.log("I'm window:" + window.location + ' and I got a message');
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.greeting == "hello")
          sendResponse({farewell: "goodbye"});
      });

  }

});
