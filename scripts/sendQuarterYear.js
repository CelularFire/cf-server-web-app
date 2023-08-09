function sendQuarterYear() {
  const quarterInput = document.getElementById("quarter");
  const yearInput = document.getElementById("year");
  const selectedQuarter = quarterInput.value;
  const selectedYear = yearInput.value;
  const telegram = window.Telegram.WebApp;

  if (selectedQuarter != "" && selectedYear != "") {
    const data = { quarter: selectedQuarter, year: selectedYear };
    telegram.sendData(JSON.stringify(data));
  }
}
