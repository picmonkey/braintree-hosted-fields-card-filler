
function loadMockCC() {
  var mockCreditCardJSON = localStorage.mockCreditCard;
  var mock_cc = {};
  try {
    mock_cc = JSON.parse(mockCreditCardJSON);
  } catch (e) {
    mock_cc = {};
  }
  if (!mock_cc.id) {
    mock_cc = {
      id: 'c4111111111111111',
      cc_number: '4111111111111111',
      cvv: '123',
      expirationMonth: '06',
      expirationYear: '2022',
    };
  }
  return mock_cc;
}
