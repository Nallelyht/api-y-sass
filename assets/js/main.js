var api = {
	url: "http://laboratoria.cuadra.co:9339/api/v1/students/"
};

var plantillaLista = '<li class="col-11">' + 
	'__nombre__' + ' ' +
	'__apellido1__' + ' ' +
	'__apellido2__ &nbsp;'+
	'<input type="checkbox">' +
	'</li>';

var cargarPagina = function () {
	cargarLista();
};

var cargarLista = function () {
	$.getJSON(api.url, function (elementos) {
		elementos.forEach(mostrarElementos)
	});
};

var mostrarElementos = function (elemento) {
	console.log(elemento)
	var plantillaFinal = " ";

	var nombre = elemento.name;
	var apellidoPaterno = elemento.pLastName;
	var apellidoMaterno = elemento.mLastName;
	
	plantillaFinal += plantillaLista
			.replace("__nombre__", nombre)
			.replace("__apellido1__", apellidoPaterno)
			.replace("__apellido2__", apellidoMaterno)
	
	$("#lista").append(plantillaFinal);
};

$(document).ready(cargarPagina);