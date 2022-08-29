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