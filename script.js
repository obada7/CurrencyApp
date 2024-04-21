function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    // Exchange rates (for demonstration purposes)
    const exchangeRate = {
      'USD': 1,
      'EUR': 0.85,
      'AED': 3.67, // Exchange rate for UAE Dirham
      'CZK': 21.60, // Exchange rate for Czech Koruna
      // Add more exchange rates as needed
    };
  
    const result = amount * (exchangeRate[toCurrency] / exchangeRate[fromCurrency]);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
  }
  