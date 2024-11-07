function calcularImpuesto(ingreso) {
    let tasa;

    if (ingreso <= 10000) {
        tasa = 0.10;  // 10% de impuestos para ingresos bajos
    } else if (ingreso <= 30000) {
        tasa = 0.20;  // 20% de impuestos para ingresos medios
    } else {
        tasa = 0.30;  // 30% de impuestos para ingresos altos
    }

    return ingreso * tasa;
}

function calculadoraImpuestos() {
    let repetir = true;

    while (repetir) {
        let ingreso = parseFloat(prompt("Ingrese su ingreso anual en dólares:"));
        if (isNaN(ingreso) || ingreso < 0) {
            alert("Por favor, ingrese un valor numérico válido.");
            continue;
        }

        let impuesto = calcularImpuesto(ingreso);
        alert('Para un ingreso de $' + ingreso + ', el impuesto a pagar es $' + impuesto + '.');
        
        let respuesta = prompt("¿Desea calcular el impuesto para otro ingreso? (si/no)").toLowerCase();
        repetir = (respuesta === "si");
    }

    alert("Gracias por usar la calculadora de impuestos.");
}