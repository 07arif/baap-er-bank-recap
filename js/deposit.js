/*
1. add event listner to the deposit button
2.get deposit amount from the deposit input field.




*/
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-field');
    const newDepositAmountString = depositAmount.value;
    console.log(newDepositAmountString)

})
