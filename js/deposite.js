const dipisoit = document.getElementById("adddeposit");
dipisoit.addEventListener("click", function () {
  const diposotNumber = getInputNumber("depositamount");
  updateSpanText("currentdeposit", diposotNumber);
  document.getElementById("depositamount").value = "";
  updateSpanText("currentBalance", diposotNumber);
});
