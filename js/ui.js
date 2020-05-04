class UInterface {
  constructor() {
    this.init();
  }
  init() {
    this.constructSelect();
  }
  constructSelect() {
    cont.getMoney().then((response) => {
      //console.log(response);
      const select = document.getElementById('criptomoneda');
      for (const [key, value] of Object.entries(response.data.Data)) {
        //console.log(value);
        const option = document.createElement('option');
        option.value = value.Symbol;
        option.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(option);
      }
    });
  }
  showMessage(message, messageClass) {
    const div = document.createElement('div');
    div.className = messageClass;
    div.appendChild(document.createTextNode(message));

    const alertMessage = document.querySelector('.mensajes');
    alertMessage.appendChild(div);
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 2000);
  }

  showResult(result, coin, coinCrypto) {
    const resultBefore = document.querySelector('#resultado > div');
    if (resultBefore) {
      resultBefore.remove();
    }

    const dates = result[coinCrypto][coin];
    let price = dates.PRICE.toFixed(2);
    let percent = dates.CHANGEPCTDAY.toFixed(2);
    let now = new Date(dates.LASTUPDATE * 1000);
    const templateHTML = `
      <div class="card bg-warning">
        <div class="card-body text-light">
          <h2 class="card-title">Result</h2>
          <p>Price the ${dates.FROMSYMBOL} to coin ${dates.TOSYMBOL} is $${price}</p>
          <p>Var at day %${percent}</p>
          <p>LAst Update ${now}</p>
        </div>
      </div>
    `;
    this.hideShowSpinner('block');
    setTimeout(() => {
      this.hideShowSpinner('none');
      document.getElementById('resultado').innerHTML = templateHTML;
    }, 3000);
  }
  hideShowSpinner(vista) {
    const spinner = document.querySelector('.contenido-spinner');
    spinner.style.display = vista;
  }
}
