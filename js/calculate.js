document.getElementById('calculate').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmount = parseFloat(foodInput.value);

    // Rent Calculation part
    const rentInput = document.getElementById('rent-input');
    const rentAmount = parseFloat(rentInput.value);
    // Cloths Calculations part
    const clothInput = document.getElementById('cloth-input');
    const clothAmount = parseFloat(rentInput.value);
    // previous Expenses 
    const previousExpenses = foodAmount + rentAmount + clothAmount;
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
    console.log(balance);
});