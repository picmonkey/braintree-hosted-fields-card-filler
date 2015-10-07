
chrome.runtime.onMessage.addListener(
  function(message, sender) {
    try {
      document.getElementById('credit-card-number').value = message.cc_number;
    }
    catch(e) {}

    try {
      var cvvs = document.getElementsByClassName('cvv');
      for (index = 0, len = cvvs.length; index < len; ++index) {
        cvvs[index].value = message.cvv;
      }
    }
    catch(e) {}

    try {
      var expirationMonths = document.getElementsByClassName('expirationMonth');
      for (index = 0, len = expirationMonths.length; index < len; ++index) {
        expirationMonths[index].value = message.expirationMonth;
      }
    }
    catch(e) {}

    try {
      var expirationYears = document.getElementsByClassName('expirationYear');
      for (index = 0, len = expirationYears.length; index < len; ++index) {
        expirationYears[index].value = message.expirationYear;
      }
    }
    catch(e) {}
  });
