//  total input value 
function totalExpenses(num) {
    const expensesInput = document.getElementById(num + '-input');
    const expensesAmount = parseFloat(expensesInput.value);
    return expensesAmount;
}
function totalExpensesAmount(num, isadd) {
    const foodInput = totalExpenses('food');
    const rentInput = totalExpenses('rent');
    const clothInput = totalExpenses('cloth');
    const incomeInput = totalExpenses('income');
    // previous Expenses 
    const previousExpenses = foodInput + rentInput + clothInput;
    //  Total Expenses Calculation
    const totalAmountText = document.getElementById(num + '-total');
    const totalAmount = parseFloat(totalAmountText.innerText);
    if (isadd == true) {
        totalAmountText.innerText = previousExpenses
    }
    else {
        const balance = incomeInput - previousExpenses;
        totalAmountText.innerText = balance;
    }
    return totalAmount;
}
// updete Saving Amount/bonss pat
function saveAmount() {
    const saveInput = document.getElementById('save-input');
    const saveInputAmount = parseFloat(saveInput.value);
    return saveInputAmount;
}
function totalSaveAmount(num, isIt) {
    // debugger;
    const saveingInput = saveAmount();
    const incomeInput = totalExpenses('income');
    // updete Saving Amount
    const savingBalanceText = document.getElementById(num + '-balanace');
    const savingBalance = parseFloat(savingBalanceText.innerText);
    if (isIt == true) {
        const savingTotalAmount = incomeInput * saveingInput / 100;
        savingBalanceText.innerText = savingTotalAmount;
        return savingTotalAmount;
    }
    else {
        const savingAmount = totalExpensesAmount('balance', false);
        const savingTotalAmount = incomeInput * saveingInput / 100;
        const remainingBalanaceTotal = savingAmount - savingTotalAmount;
        savingBalanceText.innerText = remainingBalanaceTotal;
    }

};
document.getElementById('calculate').addEventListener('click', function () {
    totalExpensesAmount('expenses', true);
    totalExpensesAmount('balance', false);

});
document.getElementById('save-but').addEventListener('click', function () {

    totalSaveAmount('saving', true);
    totalSaveAmount('remaining', false);

});
