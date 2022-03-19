const Withdrawbtn = document.getElementById("addWithdraw");
Withdrawbtn.addEventListener("click", function () {
  const withdrowNumber = getInputNumber("Withdrawamount");
  updateSpanText("currentwithdrow", withdrowNumber);
  updateSpanText("currentBalance", -1 * withdrowNumber);
  document.getElementById("Withdrawamount").value = "";
});
