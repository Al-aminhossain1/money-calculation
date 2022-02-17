document.getElementById('calculate').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmount = parseFloat(foodInput.value);
    console.log(foodAmount);
    // Rent Calculation part
    const rentInput = document.getElementById('rent-input');
    const rentAmount = parseFloat(rentInput.value);
    console.log(rentAmount);

    // Cloths Calculations part
    const clothInput = document.getElementById('cloth-input');
    const clothAmount = parseFloat(clothInput.value);
    console.log(clothAmount);

    // previous Expenses 
    const previousExpenses = foodAmount + rentAmount + clothAmount;
    // console.log(previousExpenses);
    //  Total Expenses Calculation
    const totalcost = document.getElementById('total-expenses');
    const totalcostText = totalcost.innerText
    const totalNewcost = parseFloat(totalcostText);
    totalcost.innerText = previousExpenses;
    // total income
    const incomeInput = document.getElementById('total-income');
    const incomeInputText = incomeInput.value;
    const incomeAmount = parseFloat(incomeInputText);


    // save balance
    let balanceInput = document.getElementById('total-balance');
    const balanceInputText = balanceInput.innerText
    const balanceAmount = parseFloat(balanceInputText);
    const balance = incomeAmount - previousExpenses;
    balanceInput.innerText = balance;
    // console.log(balance);
});
document.getElementById('save-but').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveInputAmount = parseFloat(saveInput.value);
    // total income
    const incomeInput = document.getElementById('total-income');
    const incomeInputText = incomeInput.value;
    const incomeAmount = parseFloat(incomeInputText);
    // updete Saving Amount
    const savingAmountText = document.getElementById('Saving-Amount');
    const savingAmount = parseFloat(savingAmountText.innerText);
    const savingTotalAmount = incomeAmount / saveInputAmount;
    console.log(savingTotalAmount);
    savingAmountText.innerText = savingTotalAmount;
})