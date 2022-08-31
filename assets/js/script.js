// Javascript Page
let responseText = document.getElementById("response-text");
let requestUrl = "https://open.er-api.com/v6/latest/USD";
let currencyInput = document.getElementById('currency-input');
let currencyButton = document.getElementById('currency-button');

// function getApi(requestUrl) {
//   fetch(requestUrl).then(function (response) {
//     console.log(response);
//     responseText.textContent = response
//     return response.json;
//   });
// }



let getCurrencyApi = async (currency) => {
    try {
        let response = await fetch("https://open.er-api.com/v6/latest/" + currency);
        let body = await response.json();
        console.log(body)
        responseText.textContent = body.rates.BAM;
        
    } catch (error) {
        alert("Currency not found!");
    }
 
  }

  function getInputCurrency(){
    var inputVal = document.getElementById("currency-input").value;
    console.log(inputVal);
    getCurrencyApi(inputVal);
}

currencyButton.addEventListener("click", function(){
    console.log("clicked")
    getInputCurrency();
})