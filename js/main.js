
const precioHeladoSolo = 500;
let precioTopping = 0;

function eleccion_topping() {

    let topping = prompt("Que topping deseas agregar a tu helado? Tenemos los disponibles los siguientes:\nKitkat.\nRocklets.\nSalsa de dulce de leche.\nMini oreos.\nChips de chocolate.").toLowerCase();

    if (topping == "kitkat") {
        precioTopping += 250;
    } else if (topping == "rocklets") {
        precioTopping += 150;
    } else if (topping == "salsa de dulce de leche") {
        precioTopping += 100;
    } else if (topping == "mini oreos") {
        precioTopping += 200;
    } else if (topping == "chips de chocolate") {
        precioTopping += 70;
    } else {
        console.log("No disponemos de ese topping, por favor elija otro");
    }
}


function finalizarCompra() {
    console.log ("Su total es de $"+(precioHeladoSolo + precioTopping)+ ", por favor pase por caja para abonar. Muchas gracias!");
}

let rta = ""

while (rta != "fin") {
    eleccion_topping()
    rta = prompt("Para finalizar su compra y visualizar el total escriba 'Fin'. De lo contrario para reiniciarla presione enter").toLowerCase()

    if (rta === "fin") {
        finalizarCompra()
    }

}
/*const precioHeladoSolo = 500;
let precioTopping = 0;

function eleccion_topping(){

    let topping = prompt("Que topping deseas agregar a tu helado? Tenemos los disponibles los siguientes:\nKitkat.\nRocklets.\nSalsa de dulce de leche.\nMini oreos.\nChips de chocolate.").toLowerCase();

    if (topping=="kitkat"){
    precioTopping = 250;
}else if(topping=="rocklets"){
    precioTopping = 150;
}else if(topping=="salsa de dulce de leche"){
precioTopping = 100;
}else if(topping=="mini oreos"){
precioTopping = 200;
}else if (topping=="chips de chocolate"){
precioTopping = 70;
}else{
    console.log ("No disponemos de ese topping, por favor elija otro");
}
}
function precioTotal(){
    return precioHeladoSolo + precioTopping;
}

let rta = ""

while (rta !="fin"){
    eleccion_topping()
    rta = prompt("Para finalizar su compra y visualizar el total escriba 'Fin'. De lo contrario para reiniciarla presione enter").toLowerCase()
    console.log ("Su total es de $" +precioTotal()+ " por favor pase por caja para abonar. Muchas gracias!")
}
*/



