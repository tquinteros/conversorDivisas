let usos = 0;
const divisas = [
    {
        name: "dolar",
        value: 300
    },
    {
        name: "euro",
        value: 316,
    },
    {
        name: "real",
        value: 65,
    },
]

function saberDivisa() {

    let divisa = prompt("Ingrese divisa a la que se desea convertir (dolar, real, euro):");
    divisa.toLowerCase;
    let cantidad = Number(prompt("Ingrese cantidad a convertir"));
    var valor;
    if (divisa == "dolar") {
        divisa = "dólares";
        const found = divisas.find(element => element = 'dolar');
        valor =  (cantidad / found.value).toFixed(2);
        usos++
    }
    else if (divisa == "euro") {
        divisa = "euros";
        const found = divisas.find(element => element = 'euro');
        valor =  (cantidad / found.value).toFixed(2);
        usos++
    }
    else if (divisa == "real") {
        divisa = "reales";
        const found = divisas.find(element => element = 'real');
        valor =  (cantidad / found.value).toFixed(2);
        usos++
    }
    else {
        alert("Ingrese una divisa válida");
    }
    alert(cantidad + " Pesos son " + valor + " " + divisa);

    if (usos == 1) {
        document.getElementById("times").innerHTML = "vez";
    } else {
        document.getElementById("times").innerHTML = "veces";
    }
    document.getElementById("cantidadUsos").innerHTML = usos;
}

