// Compoud Interest Calculations
function calculate(){
    const totalAmount = document.getElementById('total-amount');
    const amountText = document.getElementById('Principal');
    const interestRate = document.getElementById('rate');
    const yearsInput = document.getElementById('years');

    let principal = Number(amountText.value); 
    let interest = Number(interestRate.value / 100);
    let years = Number(yearsInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        amountText.value = 0;
    }if(interest < 0 || isNaN(interest)){
        interest = 0;
        interestRate.value = 0;

    }if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;

    }
    const result = principal * Math.pow((1 + interest /1), 1 * years);
    totalAmount.textContent = result.toLocaleString(undefined, {style:"currency", currency:"USD"});
}