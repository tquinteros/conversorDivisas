const divCriptos = document.getElementById("divCriptos");
const mainDiv = document.createElement("div");
mainDiv.innerHTML = `
    <h2 class="text-center m-2 fw-bolder text-decoration-underline">Conversor de Divisas de Cripto</h2>
    <p class=" text-center m-2 mt-3">Conversor de Divisas.</p>
    </div>
    <div class="row">
    <div class="col-md-6">
        <div class="container d-flex">
            <p class="mb-1">Divisa:</p>
            <p class="mb-1 mx-auto">Cantidad:</p>
        </div>
        <div class="input-group mb-3">
            <select name="" id="selectCriptos" onchange="convertirCripto()">
            </select>
            <input type="number" class="form-control text-center w-50" id="fromCripto" aria-label="">
        </div>
    </div>
    <div class="col-md-6">
        <div class="container d-flex">
            <p class="mb-1 mx-auto">Cantidad en dólares:</p>
        </div>
        <div class="input-group mb-3">
            <input class="form-control text-center w-100" type="number" id="toCripto"
                value="Disabled readonly input" disabled readonly>
        </div>
    </div>
    `
divCriptos.appendChild(mainDiv)

function clearInputCriptos() {
    document.getElementById("fromCripto").value = "";
    document.getElementById("toCripto").value = "";
}

let selectCripto = document.getElementById("selectCriptos");
selectCripto.onchange = () => clearInputCriptos();


// Librería Luxor
function updateTime() {

    const showtime = document.getElementById("times");

    const timenow = luxon.DateTime.now();
    showtime.innerHTML = timenow.toFormat("HH:mm:ss");
}

setInterval(function () {
    updateTime()
}, 1000)

const criptoList = document.getElementById("criptoList")

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((post) => {
            const tr = document.createElement("tr")
            tr.innerHTML = `
            <td class="text-capitalize fw-semibold"><img src="${post.image}" class="img-fluid" width="30"> ${post.id} <span class="text-uppercase text-muted">${post.symbol}</span></td>
            <td class="">${post.current_price} US$</td>
            <td class="">${post.ath} US$</td>
        `
            criptoList.append(tr)

            let option = document.createElement("option");
            option.classList.add("text-capitalize");
            option.value = post.current_price;
            option.text = post.id;
            selectCripto.appendChild(option);
            function convertirCripto() {
                let divisaFromCripto = document.getElementById("selectCriptos").value;
                let valueFromCripto = document.getElementById("fromCripto").value;
                let valor;
                valor = valueFromCripto * divisaFromCripto;
                document.getElementById("toCripto").value = valor;
            }
            let divisaFromCripto = document.getElementById("fromCripto");
            divisaFromCripto.onkeyup = () => convertirCripto();
            const guardarCriptos = (id, current_price) => { (localStorage.setItem(id, current_price)) };
            guardarCriptos("listaCriptos", JSON.stringify(data));
        });
    })