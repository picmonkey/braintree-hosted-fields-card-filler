
function fireInputEvent(element) {
  var event = document.createEvent('Event');
  event.initEvent('input', true, true);
  element.dispatchEvent(event);
}

chrome.runtime.onMessage.addListener(
  function(message, sender) {
    try {
      var numberElement = document.getElementById('credit-card-number');

      numberElement.value = message.cc_number;
      fireInputEvent(numberElement);
    }
    catch(e) {}

    try {
      var cvvs = document.getElementsByClassName('cvv');
      for (index = 0, len = cvvs.length; index < len; ++index) {
        cvvs[index].value = message.cvv;
        fireInputEvent(cvvs[index]);
      }
    }
    catch(e) {}

    try {
      var expirationMonths = document.getElementsByClassName('expirationMonth');
      for (index = 0, len = expirationMonths.length; index < len; ++index) {
        expirationMonths[index].value = message.expirationMonth;
        fireInputEvent(expirationMonths[index]);
      }
    }
    catch(e) {}

    try {
      var expirationYears = document.getElementsByClassName('expirationYear');
      for (index = 0, len = expirationYears.length; index < len; ++index) {
        expirationYears[index].value = message.expirationYear;
        fireInputEvent(expirationYears[index]);
      }
    }
    catch(e) {}
  });
