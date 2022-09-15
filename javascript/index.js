let usos = 0;
const divisas = [
    {
        name: "dolar",
        value: 300,
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


// CONSULTA:
// AL UTILIZAR ESTA FUNCIÓN NO ME ESTA ALMACENANDO EL VALOR PARA EL EURO Y EL REAL COMO HABÍA ENTREGADO EN EL SIMULADOR PASADO POR ESO LE TUVE QUE HARDCODEAR LOS VALORES, CUAL SERÁ EL MOTIVO?
// PORQUE EN EL SIMULADOR DE LA ENTREGA ANTERIOR LA FUNCIÓN ERA LA MISMA Y SI FUNCIONABA, ESTUVE HORAS INTENTANDO SABER PORQUE Y NO PUDE, PODRÍA AYUDARME?


// function convertir() {
//     let divisaFrom = document.getElementById("divisaFrom").value.toLowerCase();
//     let valueFrom = document.getElementById("from").value;
//     var valor;
//     if (divisaFrom == "dolar") {
//         const found = divisas.find(element => element = 'dolar');
//         valor = valueFrom * found.value;
//         document.getElementById("to").value = valor;
//         usos++
//     }
//     else if (divisaFrom == "euro") {
//         const found = divisas.find(element => element = 'euro');
//         valor = valueFrom * found.value;
//         document.getElementById("to").value = valor;
//         usos++
//     }
//     else if (divisaFrom == "real") {
//         const found = divisas.find(element => element = 'real');
//         valor = valueFrom * found.value;
//         document.getElementById("to").value = valor;
//         usos++
//     }
//     else {
//         alert("Ingrese divisa válida");
//     }
//     if (usos == 1) {
//         document.getElementById("times").innerHTML = "vez";
//     } else {
//         document.getElementById("times").innerHTML = "veces";
//     }
//     document.getElementById("cantidadUsos").innerHTML = usos;
// }

let boton = document.getElementById("convertir");
boton.onclick = () => convertir();

function convertir() {
    let divisaFrom = document.getElementById("divisaFrom").value.toLowerCase();
    let valueFrom = document.getElementById("from").value;
    var valor;

    if (valueFrom < 0) {
        alert("Ingrese número mayor a 0");
    }
    else {
        if (divisaFrom == "dolar") {
            const found = divisas.find(element => element = 'dolar');
            valor = valueFrom * found.value;
            document.getElementById("to").value = valor;
            usos++
        }
        else if (divisaFrom == "euro") {
            const found = divisas.find(element => element = 'euro');
            valor = valueFrom * 316;
            document.getElementById("to").value = valor;
            usos++
        }
        else if (divisaFrom == "real") {
            const found = divisas.find(element => element = 'real');
            valor = valueFrom * 65;
            document.getElementById("to").value = valor;
            usos++
        }
        else {
            alert("Ingrese divisa válida");
        }

    }
    if (usos == 1) {
        document.getElementById("times").innerHTML = "vez";
    } else {
        document.getElementById("times").innerHTML = "veces";
    }
    document.getElementById("cantidadUsos").innerHTML = usos;
}
