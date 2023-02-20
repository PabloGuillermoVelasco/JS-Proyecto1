//Eleccion de toppings para un helado. Se pueden elegir varios o  inclusive ninguno y luego muestra el precio total cuando el usuario finaliza el bucle ingresando "fin"

const precioHeladoSolo = 900;
let precioTopping = 0;

function eleccion_topping() {

    let topping = prompt("Que topping deseas agregar a tu helado? Tenemos los disponibles los siguientes:\nKitkat.\nRocklets.\nSalsa de dulce de leche.\nMini oreos.\nChips de chocolate.\nNinguno").toLowerCase();

    if (topping == "kitkat") {
        precioTopping += 350;
    } else if (topping == "rocklets") {
        precioTopping += 250;
    } else if (topping == "salsa de dulce de leche") {
        precioTopping += 150;
    } else if (topping == "mini oreos") {
        precioTopping += 300;
    } else if (topping == "chips de chocolate") {
        precioTopping += 200;
    } else if (topping == "ninguno.") {
        precioTopping += 0;
    } else {
        console.log("No disponemos de ese topping, por favor elija otro");
    }
}

function finalizarCompra() {
    console.log("Su total es de $" + (precioHeladoSolo + precioTopping) + ", por favor pase por caja para abonar. Muchas gracias!");
}

let rta = ""

while (rta != "fin") {
    eleccion_topping()
    rta = prompt("Para finalizar su compra y visualizar el total escriba 'Fin'. Si desea agregar otro topping presione enter.").toLowerCase();

    if (rta === "fin") {
        finalizarCompra()
    }
}
