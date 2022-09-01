// Javascript Page
let responseText = document.getElementById("response-text");
let requestUrl = "https://open.er-api.com/v6/latest/USD";
let currencyInput = document.getElementById('currency-input');
let currencyButton = document.getElementById('currency-button');
let currencyCompare = document.getElementById('currency-compare');
let mostRecent = document.getElementById('recent');
var modal = document.getElementById('button-modal');
var close = document.getElementsByClassName('modal-close')[0];

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

mostRecent.textContent = "Your most recent conversion was: " + localStorage.getItem('mostRecentConversion') + "!"


let getCurrencyApi = async (currency, converted, amount) => {
    try {
        let response = await fetch("https://open.er-api.com/v6/latest/" + currency);
        let body = await response.json();
        console.log(converted);
        let convertedCurr = converted
        console.log(body)
        responseText.classList.remove("hide");
        responseText.textContent = body.rates[convertedCurr].toFixed(2) * amount + " " + converted;
        localStorage.setItem('mostRecentConversion', amount + " " + currency + " to " + responseText.textContent);
        mostRecent.classList.remove('hide');
        mostRecent.textContent = "Your most recent conversion was: " + localStorage.getItem('mostRecentConversion') + "!"
         } catch (error) 
    {
        modal.style.display = 'block'
        close.onclick =function() {
        modal.style.display = 'none'
        window.onclick = function(event) {
       if (event.target.className == 'modal-background') {
       modal.style.display ='none'
     }
}
    }
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


