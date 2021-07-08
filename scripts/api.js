function apiEvent(event) {

    const api = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

    let usd,euro,btc;

    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            usd = data.USDBRL.bid;
            euro = data.EURBRL.bid;
            btc = data.BTCBRL.bid;

            let docDolar = document.querySelector('#dolar');
            docDolar.innerHTML += "R$"+usd;

            let euroDolar = document.querySelector('#euro');
            euroDolar.innerHTML += "R$"+euro;

            let btcDolar = document.querySelector('#btc');
            btcDolar.innerHTML += "R$"+btc;
        });
}