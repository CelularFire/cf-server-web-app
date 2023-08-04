function enviarMensaje() {
	const dateInput = document.getElementById("input-fecha");
	const selectedDate = dateInput.value;
	const telegram = window.Telegram.WebApp;

	if(selectedDate != "") {
		telegram.sendData(selectedDate);
	}
}
