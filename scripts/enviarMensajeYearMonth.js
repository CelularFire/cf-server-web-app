function enviarMensaje() {
	const mesInput = document.getElementById("mes");
	const anoInput = document.getElementById("ano");
	const selectedMonth = mesInput.value;
	const selectedYear = anoInput.value;
	const telegram = window.Telegram.WebApp;

	if(selectedMonth != "" && selectedYear != "") {
		console.log({selectedMonth, selectedYear});
		telegram.sendData(`mes: ${selectedMonth}, año: ${selectedYear}`);
	}
}
