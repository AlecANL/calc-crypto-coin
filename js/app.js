const form = document.getElementById('formulario');
const apiKey = '7646344aa4d6f6570453d7d3c6fd2e75db4f5c447d0b208d75c2e1ec2a7d663b';
const cont = new API(apiKey);
const UI = new UInterface();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const money = document.getElementById('moneda');
  const moneySelect = money.options[money.selectedIndex].value;

  const cryptoMoney = document.getElementById('criptomoneda');
  const cryptoSelect = cryptoMoney.options[cryptoMoney.selectedIndex].value;

  if (moneySelect === '' || cryptoSelect === '') {
    UI.showMessage('All camps is requires, please try again', 'alert bg-danger text-center');
  } else {
    console.log(moneySelect);
    console.log(cryptoSelect);
    UI.hideShowSpinner();
    cont
      .getValues(moneySelect, cryptoSelect)
      .then((data) => UI.showResult(data.data.RAW, moneySelect, cryptoSelect));
  }
});
