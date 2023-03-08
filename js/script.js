// login process
function login() {
  const emailField = document.getElementById("email");
  const passField = document.getElementById("password");
  if (emailField.value.toLowerCase() === "mirfaisal08@gmail.com") {
    if (passField.value == "12345678") {
      location.href = "../amount.html";
    } else {
      window.alert("Please enter your correct Password");
    }
  } else {
    window.alert("Please enter your correct Email");
  }
}
// transtion process
function diposit() {
  const dipositField = document.getElementById("diposit-amount-field");
  const newDipositValue = parseFloat(dipositField.value);
  if (isNaN(newDipositValue)) {
    alert("please Enter amount");
  } else {
    const dipositElement = document.querySelector(".diposit-amount");
    const prvDipositAmount = parseFloat(dipositElement.innerText);
    const total = prvDipositAmount + newDipositValue;
    dipositElement.innerHTML = total;
    dipositField.value = "";
    const currentBalance = document.querySelector(".current-banlance");
    const prvbalance = parseFloat(currentBalance.innerText);
    currentBalance.innerText = newDipositValue + prvbalance;
  }
}
// withdrow
function withdrow() {
  const withdrowField = document.getElementById("withdrow-amount-field");
  const newWithdrowAmount = parseFloat(withdrowField.value);
  if (isNaN(newWithdrowAmount)) {
    alert("please Enter amount");
  } else {
    const withdrowElement = document.querySelector(".withdrow-amount");
    const prvWithdrowAmount = parseFloat(withdrowElement.innerText);
    const total = newWithdrowAmount + prvWithdrowAmount;
    withdrowElement.innerHTML = total;
    withdrowField.value = "";
    const currentBalance = document.querySelector(".current-banlance");
    const prvbalance = parseFloat(currentBalance.innerText);
    currentBalance.innerText = prvbalance - newWithdrowAmount;
  }
}
