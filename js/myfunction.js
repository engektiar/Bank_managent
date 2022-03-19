function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
function updateSpanText(id, diposotNumber) {
  const current = document.getElementById(id).innerText;
  const curentNumber = parseFloat(current);
  const total = diposotNumber + curentNumber;
  document.getElementById(id).innerText = total;
}
