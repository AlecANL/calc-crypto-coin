class API {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  async getMoney() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      data,
    };
  }
  async getValues(coin, cryptoCoin) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}&api_key=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      data,
    };
  }
}
