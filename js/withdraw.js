/*
1.add event handler with withdraw btn.
2.get the widtdraw amount
3. clear the withdraw input Field
4.get Previous withdraw tolal
5.calulate total withdraw amount and set it to the withdraw total element
6.get previous balance
7.calculate new balance
*/
// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newwithdrawAmountString);
    // step 3
    withdrawField.value = '';
    //step 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal)

    // step 5
    const newwithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newwithdrawTotal;

    // step 6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;

}) 