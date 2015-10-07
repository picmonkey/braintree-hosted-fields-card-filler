
function storeSelectedCreditCard(mock_cc) {
  localStorage.mockCreditCard = JSON.stringify(mock_cc);
  updateSelectedCard(mock_cc);
}

function updateSelectedCard(mock_cc) {
  $('.card-option').removeClass('active');
  $('#' + mock_cc.id).addClass('active');
  $('#cc_number')[0].textContent = mock_cc.cc_number;
  $('#cvv')[0].textContent = mock_cc.cvv;
  $('#expirationMonth')[0].textContent = mock_cc.expirationMonth;
  $('#expirationYear')[0].textContent = mock_cc.expirationYear;
}

window.onload = function() {
  mock_cc = loadMockCC();

  // one-time on-load update of inputs
  $('input[name=expirationMonth]').val(mock_cc.expirationMonth);
  $('input[name=expirationYear]').val(mock_cc.expirationYear);

  updateSelectedCard(mock_cc);

  $('.card-option').click(function(e) {
    var target = $(e.target);

    mock_cc.id = target.attr('id');
    mock_cc.cc_number = target.data('card');
    mock_cc.cvv = target.data('cvv');

    // save it
    storeSelectedCreditCard(mock_cc);
  });

  $('input[name=expirationMonth]').bind('blur change',function(e){
    mock_cc.expirationMonth = $('input[name=expirationMonth]').val();
    storeSelectedCreditCard(mock_cc);
  });

  $('input[name=expirationYear]').bind('blur change',function(e){
    mock_cc.expirationYear = $('input[name=expirationYear]').val();
    storeSelectedCreditCard(mock_cc);
  });
}
