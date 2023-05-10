flatpickr("#fecha");

function enviarMensaje() {
	var fechaSeleccionada = document.getElementById("fecha").value;
	if(fechaSeleccionada != "") {
		Telegram.Auth.login(function(data) {
			Telegram.App.sendMessage({
				text: "Fecha seleccionada: " + fechaSeleccionada
			});
		});
	}
}
