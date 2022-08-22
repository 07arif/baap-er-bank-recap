/*
1. add event listner to the deposit button
2.get deposit amount from the deposit input field.
2-5. convert string deposit amount to number type
3. clear the deposit input field after geeting teh value
4.get the previous deposit total;

*/

// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3
    depositField.value = '';

    //step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString);


    // step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    //step 7
    const newBalance = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalance;
})
