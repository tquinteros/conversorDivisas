function aparecerCripto() {
    document.getElementById("divCripto").style.display = "block";
    document.getElementById("divDivisa").style.display = "none";
}

function aparecerDivisas() {
    document.getElementById("divCripto").style.display = "none";
    document.getElementById("divDivisa").style.display = "block";
}
const divisas = [
    {
        name: "Dolar",
        price: 300,
    },
    {
        name: "Euro",
        price: 316,
    },
    {
        name: "Real",
        price: 65,
    },

]

let selectDivisa = document.getElementById("selectDivisa");
divisas.forEach(element => {
    let option = document.createElement("option");
    option.value = element.name.toLowerCase();
    option.text = element.name;
    selectDivisa.appendChild(option);
});

// Guardar Array de Divisas
const guardarDivisa = (nombre, precio) => {(localStorage.setItem(nombre, precio))};
guardarDivisa("listaDivisas", JSON.stringify(divisas));

const criptos = [
    {
        name: "Bitcoin",
        price: 20000,
    },
    {
        name: "Ethereum",
        price: 1500,
    },
    {
        name: "BNB",
        price: 265,
    },
    {
        name: "XRP",
        price: 0.04,
    },
]

// Guardar Array de Criptos
const guardarCriptos = (nombre, precio) => {(localStorage.setItem(nombre, precio))};
guardarCriptos("listaCriptos", JSON.stringify(criptos));

let selectCripto = document.getElementById("selectCriptos")
criptos.forEach(element => {
    let option = document.createElement("option");
    option.value = element.name.toLowerCase();
    option.text = element.name;
    selectCripto.appendChild(option);
});


// let botonCripto = document.getElementById("convertirCripto");
// botonCripto.onclick = () => convertirCripto();
// let botonDivisa = document.getElementById("convertirDivisa")
// botonDivisa.onclick = () => convertirDivisa()

let divisaFrom = document.getElementById("fromDivisa");
divisaFrom.onkeyup = () => convertirDivisa();
let divisaFromCripto = document.getElementById("fromCripto");
divisaFromCripto.onkeyup = () => convertirCripto();

function convertirCripto() {
    let divisaFromCripto = document.getElementById("selectCriptos").value;
    let valueFromCripto = document.getElementById("fromCripto").value;
    let found = criptos.find(({ name }) => name.toLowerCase() == divisaFromCripto);
    valor = valueFromCripto * found.price;
    document.getElementById("toCripto").value = valor;
}

function convertirDivisa() {
    let divisaFrom = document.getElementById("selectDivisa").value;
    let valueFrom = document.getElementById("fromDivisa").value;
    let found = divisas.find(({ name }) => name.toLowerCase() == divisaFrom);
    valor = valueFrom * found.price;
    document.getElementById("toDivisa").value = valor;
}


function clearInputDivisas() {
    document.getElementById("fromDivisa").value = "";
    document.getElementById("toDivisa").value = "";
}

function clearInputCriptos() {
    document.getElementById("fromCripto").value = "";
    document.getElementById("toCripto").value = "";
}
