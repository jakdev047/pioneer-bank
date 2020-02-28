// selection
const loginBtn = document.getElementById('login');
const loginArea = document.getElementById('login-area');
const transectionArea = document.getElementById('transection-area');

const addDepositBtn = document.getElementById('addDeposit');
const depositAmount = document.getElementById('depositAmount');


// loginBtn event handler
loginBtn.addEventListener('click',function(){

  loginArea.style.display = "none";
  transectionArea.style.display = "block";

});

// loginBtn event handler
addDepositBtn.addEventListener('click',function(){

  // input capture
  const depositAmountValue = depositAmount.value;

  // data string to num
  const depositNum = parseFloat(depositAmountValue);

  console.log(depositNum);

})