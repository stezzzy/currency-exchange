// Javascript Page
let responseText = document.getElementById("response-text");
let requestUrl = "https://open.er-api.com/v6/latest/USD";
let currencyInput = document.getElementById('currency-input');
let currencyButton = document.getElementById('currency-button');
let currencyCompare = document.getElementById('currency-compare');

var cryptocurrency = document.getElementById('cryptocurrency')
var cryptocurrencyButton = document.getElementById('cryptocurrency-button')
var currency = document.getElementById('currency')
getApi()
function getApi() {
   axios.get('https://api.coingecko.com/api/v3/exchange_rates')
    .then(function(response) {
    console.log(response.data.rates);
      responseText.textContent = response.data.rates.btc
     return response.json;
   });
 }




// (async () => {
//     let response = await fetch("https://open.er-api.com/v6/latest/USD");
//     let body = await response.json();
//     console.log(body)
//     responseText.textContent = body.rates.BAM;
//   })()

  



let getCurrencyApi = async (currency, converted, amount) => {
    try {
        let response = await fetch("https://open.er-api.com/v6/latest/" + currency);
        let body = await response.json();
        console.log(converted);
        let convertedCurr = converted
        console.log(body)
        responseText.classList.remove("hide");
        responseText.textContent = body.rates[convertedCurr].toFixed(2) * amount + " " + converted;
        
    } catch (error) {
        alert("Currency not found!");
    }

    function convertToCurrency(converted) {
        
    }


 
  }

  function getInputCurrency(){
    let inputVal = document.getElementById("currency-input").value;
    console.log(inputVal);
    let compareVal = document.getElementById('currency-compare').value;
    console.log(compareVal);
    let amountVal = document.getElementById('amount').value;
    console.log(amountVal);
    getCurrencyApi(inputVal, compareVal, amountVal);
}

currencyButton.addEventListener("click", function(){
    console.log("clicked")
    getInputCurrency();
})

