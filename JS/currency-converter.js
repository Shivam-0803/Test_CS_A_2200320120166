async function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const resultElement = document.getElementById("result");
    const errorMessage = document.getElementById("error-message");
    const resultContainer = document.getElementById("result-container");

    // Reset visibility of error and result
    errorMessage.classList.add("hidden");
    resultContainer.classList.add("hidden");

    // Check if amount is valid
    if (isNaN(amount) || amount <= 0) {
        errorMessage.textContent = "Please enter a valid amount.";
        errorMessage.classList.remove("hidden");
        return;
    }

    try {
        // Fetch exchange rates with USD as the base currency
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const data = await response.json();

        // Calculate conversion using USD as an intermediary
        const usdToFromCurrency = data.rates[fromCurrency];
        const usdToToCurrency = data.rates[toCurrency];
        
        if (usdToFromCurrency && usdToToCurrency) {
            const convertedAmount = ((amount / usdToFromCurrency) * usdToToCurrency).toFixed(2);
            resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            resultContainer.classList.remove("hidden");
        } else {
            errorMessage.textContent = "Currency conversion rate not found.";
            errorMessage.classList.remove("hidden");
        }
    } catch (error) {
        errorMessage.textContent = "Error fetching exchange rates. Please try again.";
        errorMessage.classList.remove("hidden");
    }
}
