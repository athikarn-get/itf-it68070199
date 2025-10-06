function showOutput(message) {
  let box = document.getElementById("outputBox");
  box.innerHTML = message + "\n" + box.innerHTML;
  box.scrollTop = 0;
}
function updateBalance() {
  let account = parseFloat(document.getElementById("accountBalance").value);
  let cash = parseFloat(document.getElementById("cashBalance").value);
  if (isNaN(account) || isNaN(cash)) {
    showOutput("Couldn't update balance. (Invalid input)");
    return;
  }
  showOutput("Current account balance: " + account + ", Current cash balance: " + cash);
}
function deposit() {
  let amount = parseFloat(document.getElementById("operationAmount").value);
  let account = parseFloat(document.getElementById("accountBalance").value);
  let cash = parseFloat(document.getElementById("cashBalance").value);
  if (isNaN(amount) || amount <= 0) {
    showOutput("Couldn't deposit entered balance. (Invalid amount)");
    return;
  }
  if (amount > cash) {
    showOutput("Couldn't deposit entered balance. (Insufficient cash balance)");
    return;
  }
  account += amount;
  cash -= amount;
  document.getElementById("accountBalance").value = account;
  document.getElementById("cashBalance").value = cash;
  showOutput("Current account balance: " + account + ", Current cash balance: " + cash);
}
function withdraw() {
  let amount = parseFloat(document.getElementById("operationAmount").value);
  let account = parseFloat(document.getElementById("accountBalance").value);
  let cash = parseFloat(document.getElementById("cashBalance").value);
  if (isNaN(amount) || amount <= 0) {
    showOutput("Couldn't withdraw entered balance. (Invalid amount)");
    return;
  }
  if (amount > account) {
    showOutput("Couldn't withdraw entered balance. (Insufficient account balance)");
    return;
  }
  account -= amount;
  cash += amount;
  document.getElementById("accountBalance").value = account;
  document.getElementById("cashBalance").value = cash;
  showOutput("Current account balance: " + account + ", Current cash balance: " + cash);
}
function performOperation() {
  let type = document.getElementById("operationType").value;
  if (type === "deposit") {
    deposit();
  } else if (type === "withdraw") {
    withdraw();
  }
}
