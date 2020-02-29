// selection
const loginBtn = document.getElementById('login');
const loginArea = document.getElementById('login-area');
const transectionArea = document.getElementById('transection-area');

const addDepositBtn = document.getElementById('addDeposit');
const depositAmount = document.getElementById('depositAmount');
const currentDeposit = document.getElementById('currentDeposit');

const currentBalance = document.getElementById('currentBalance');


const reduceWidrawBtn = document.getElementById('reduceWidraw');
const withdrawAmount = document.getElementById('withdrawAmount');
const currentWithdraw = document.getElementById('currentWithdraw');


// loginBtn event handler
loginBtn.addEventListener('click',function(){

  loginArea.style.display = "none";
  transectionArea.style.display = "block";

});

// addDepositBtn event handler
addDepositBtn.addEventListener('click',function(){

  if ( depositAmount.value != ''){
    // input capture
    let depositAmountValue = depositAmount.value;

    // data string to num
    const depositNum = parseFloat(depositAmountValue);
    const currentDepositNum = parseFloat(currentDeposit.innerText);

    const totalDeposit  = depositNum + currentDepositNum;

    currentDeposit.innerText = totalDeposit;

    depositAmount.value = ''

    // for current balance
    currentBalance.innerText = parseFloat(currentBalance.innerText) + totalDeposit;
  }

});

// reduceWidrawBtn event Handler
reduceWidrawBtn.addEventListener('click',function(){
  if( withdrawAmount.value != '' ) {

    // input capture
    let withdrawAmountValue = parseFloat(withdrawAmount.value);

    // current withdraw
    const currentWithdrawNum = parseFloat(currentWithdraw.innerText)

    // total withdraw
    const totalWithdraw = currentWithdrawNum + withdrawAmountValue;

    // to add withdraw box
    currentWithdraw.innerText = totalWithdraw;

    // empty withdraw input
    withdrawAmount.value = ''

    // for reduce balance
    currentBalance.innerText = parseFloat(currentBalance.innerText) - totalWithdraw;

  }
})