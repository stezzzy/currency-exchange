// Javascript Page
let responseText = document.getElementById("response-text");
let requestUrl = "https://open.er-api.com/v6/latest/USD";

getApi()
function getApi() {
   axios.get('https://api.coingecko.com/api/v3/exchange_rates')
    .then(function(response) {
    console.log(response.data.rates);
      responseText.textContent = response.data.rates.bch
     return response.json;
   });
 }



(async () => {
    let response = await fetch("https://open.er-api.com/v6/latest/USD");
    let body = await response.json();
    console.log(body)
    responseText.textContent = body.rates.BAM;
  })()

  