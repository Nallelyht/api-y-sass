var api = {
	url: "//laboratoria.cuadra.co/api/v1/students/"
};

var plantillaLista = '<li>' + 
		'__nombre__' + ' ' +
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
	var plantillaFinal = " ";

	var nombre = elemento.name;

	plantillaFinal += plantillaLista
		.replace('__nombre__', nombre);


	$("#lista").append(plantillaFinal);
};

$(document).ready(cargarPagina);