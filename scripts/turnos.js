var servicios = [
    { nombre: "Servicio 1:", precio: 3000 },
    { nombre: "Servicio 2:", precio: 3500 },
    { nombre: "Servicio 3:", precio: 3500 },
    { nombre: "Servicio 4:", precio: 4000 },
    { nombre: "Servicio 5:", precio: 4000 }
];

var serviciosElegidos = [];
var total = 0;

function mostrarAlerta() {
    alert("¡Hay un 10% de descuento en todos los servicios al solicitar 2 o más!");
}

function calcularTotal() {
    total = 0;

    for (var i = 0; i < serviciosElegidos.length; i++) {
        total += serviciosElegidos[i].precio;
    }

    if (serviciosElegidos.length > 1) {
        total *= 0.9; // Aplicar descuento del 10%
    }

    total = total.toFixed(2); // Redondear a 2 decimales
}

function realizarPedido() {
    var serviciosSeleccionados = document.getElementsByName("servicio");
    serviciosElegidos = [];

    for (var i = 0; i < serviciosSeleccionados.length; i++) {
        if (serviciosSeleccionados[i].checked) {
            var servicio = servicios.find(function (s) {
                return s.nombre === serviciosSeleccionados[i].value;
            });

            serviciosElegidos.push(servicio);
        }
    }

    if (serviciosElegidos.length < 2) {
        alert("Recorda que si reservas 2 servicios tenés descuento.");
        return;
    }

    var fecha = document.getElementById("fecha").value;
    var turno = document.getElementById("turno").value;

    var formasPago = document.getElementsByName("pago");
    var formaPagoSeleccionada = "";

    for (var i = 0; i < formasPago.length; i++) {
        if (formasPago[i].checked) {
            formaPagoSeleccionada = formasPago[i].value;
            break;
        }
    }

    if (formaPagoSeleccionada === "") {
        alert("Debe seleccionar una forma de pago.");
        return;
    }

    calcularTotal();

    alert("¡Pedido realizado con éxito!\n\nServicios: " + serviciosElegidos.map(function (s) {
        return s.nombre;
    }).join(", ") + "\nFecha: " + fecha + "\nTurno: " + turno + "\nForma de pago: " + formaPagoSeleccionada + "\nTotal a pagar: $" + total);
}
