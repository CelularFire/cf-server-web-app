function sendMonthYear() {
	const mesInput = document.getElementById("mes");
	const yearInput = document.getElementById("year");
	const selectedMonth = mesInput.value;
	const selectedYear = yearInput.value;
	const telegram = window.Telegram.WebApp;

	if(selectedMonth != "" && selectedYear != "") {
		console.log({selectedMonth, selectedYear});
		telegram.sendData(`mes: ${selectedMonth}, año: ${selectedYear}`);
	}
}
