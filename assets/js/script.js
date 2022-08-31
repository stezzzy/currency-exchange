// Javascript Page
let responseText = document.getElementById("response-text");
let requestUrl = "https://open.er-api.com/v6/latest/USD";

// function getApi(requestUrl) {
//   fetch(requestUrl).then(function (response) {
//     console.log(response);
//     responseText.textContent = response
//     return response.json;
//   });
// }

(async () => {
    let response = await fetch("https://open.er-api.com/v6/latest/USD");
    let body = await response.json();
    console.log(body)
    responseText.textContent = body.rates.BAM;
  })()

  
  
// // Coingecko URL
// const coingeckoUrl = "https://api.coingecko.com/api/v3/exchange_rates"
  


// const getExchangeRates = async event => {
//   let string = "https://api.coingecko.com/api/v3/exchange_rates"
//   await fetch(string)
//   .then(resp => resp.json())
//   .then(data => console.log(data.rates))}
  
// console.log(getExchangeRates);

// Binance

var baseUrl = "https://api.binance.com";

var query = '/api/v3/ticker/price'
// query += '?symbol=BTCUSDT&limit=5'

var url = baseUrl + query

var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', url, true);
ourRequest.onload = function(){
  console.log(ourRequest.responseText);
}
ourRequest.send();