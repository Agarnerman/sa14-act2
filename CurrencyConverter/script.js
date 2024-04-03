const apiKey = "62a7l61eVbJUkn7FmajvDYSEhCEAvPbH"; 
const form = document.getElementById("currency-form");
const conversionResultDiv = document.getElementById("conversion-result");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const amount = document.getElementById("amount").value;
  fetchConversionRate(fromCurrency, toCurrency, amount);
});

function fetchConversionRate(from, to, amount) {
  const url = `https://api.currencybeacon.com/v1/convert?api_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`; 

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const rate = data.result.rate;
        const convertedAmount = amount * rate;
        displayConversionResult(amount, from, to, convertedAmount, rate);
      } 
    })
    .catch(error => {
      console.error(error);
      alert("Error fetching conversion rate!");
    });
}

function displayConversionResult(amount, fromCurrency, toCurrency, convertedAmount, rate) {
  conversionResultDiv.innerHTML = `
    <p>Converted ${amount} ${fromCurrency} to ${convertedAmount.toFixed(2)} ${toCurrency} at a rate of 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}.</p>
  `;
}
