function sendMonthYear() {
  const mesInput = document.getElementById("month");
  const yearInput = document.getElementById("year");
  const selectedMonth = mesInput.value;
  const selectedYear = yearInput.value;
  const telegram = window.Telegram.WebApp;

  if (selectedMonth != "" && selectedYear != "") {
    const data = { month: selectedMonth, year: selectedYear };
    telegram.sendData(JSON.stringify(data));
  }
}
