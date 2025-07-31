document.getElementById("receiptForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("rDate").textContent = document.getElementById("date").value;
  document.getElementById("rTx").textContent = document.getElementById("transaction").value;
  document.getElementById("rAmount").textContent = document.getElementById("amount").value + " BTC";
  document.getElementById("rWallet").textContent = document.getElementById("wallet").value;

  document.getElementById("receipt").classList.remove("hidden");
});
