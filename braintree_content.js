
chrome.runtime.onMessage.addListener(
  function(message, sender) {
    try {
      $('#credit-card-number').trigger('change:number.isFocused');
      $('#credit-card-number').val(message.cc_number);
      $('#credit-card-number').trigger('change');
      $('#credit-card-number').trigger('input');
    }
    catch(e) {
    }

    try {
      $('.cvv').val(message.cvv).trigger('change:cvv.value');
      $('.cvv').trigger('change:cvv.isFocused');
      $('.cvv').trigger('input');
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
