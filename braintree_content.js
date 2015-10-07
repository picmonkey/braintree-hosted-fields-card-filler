
$(document).ready(function() { 

  console.log("I'm in a braintree hosted frame!");

  chrome.runtime.onMessage.addListener(
    function(message, sender) {
      console.log("I'm window:" + window.location + ' and I got a message');
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      console.log("message:");
      console.log(message);

      try {
        document.getElementById('credit-card-number').value = message.cc_number;
      }
      catch(e) {
      }

      try {
        var cvvs = document.getElementsByClassName('cvv');
        console.log("cvvs");
        console.log(cvvs);
        for (index = 0, len = cvvs.length; index < len; ++index) {
          console.log("hi!");
          console.log(cvvs[index]);
          cvvs[index].value = message.cvv;
        }
      }
      catch(e) {
      }

      try {
        var expirationMonths = document.getElementsByClassName('expirationMonth');
        console.log("expirationMonths");
        console.log(expirationMonths);
        for (index = 0, len = expirationMonths.length; index < len; ++index) {
          console.log("hi!");
          console.log(expirationMonths[index]);
          expirationMonths[index].value = message.expirationMonth;
        }
      }
      catch(e) {
      }

      try {
        var expirationYears = document.getElementsByClassName('expirationYear');
        console.log("expirationYears");
        console.log(expirationYears);
        for (index = 0, len = expirationYears.length; index < len; ++index) {
          console.log("hi!");
          console.log(expirationYears[index]);
          expirationYears[index].value = message.expirationYear;
        }
      }
      catch(e) {
      }

    });

});
