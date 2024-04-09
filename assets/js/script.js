/// fecha para api ///

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;

console.log(today)

//////////////


const resultados = document.querySelector(".resultados")


function values(){
    var tipoMoneda = "";
    const fromCurrency = document.querySelector("#pesoCLP").value
    const toCurrency = document.querySelector("#moneda").value

    if (toCurrency === "1"){
        tipoMoneda = "dolar";
    } else if (toCurrency === "2"){
        tipoMoneda = "euro";
    }
    console.log(tipoMoneda)
    var apiURL = "https://mindicador.cl/api/" + tipoMoneda;

    cambioMoneda(apiURL,fromCurrency);
}

async function cambioMoneda(apiURL,fromCurrency) {
    console.log(apiURL)
   
    try{
        const res = await fetch(apiURL);
        const result = await res.json();

        var valor = result.serie[0].valor;
        console.log(valor)
        var cambio = fromCurrency / valor;
        
        console.log(cambio)
        /*
        prepararConfiguracionParaLaGrafica(result);
        renderGrafica(result);
        */
        resultado(cambio);
        } 
    catch (e) {
        alert(e.message);
       } 
}

async function resultado(cambio) {
    let template = "";

    template += `
    <div class="p-1 text-center fs-5"><h4>Resultados:</h4>
    <p class="m-0">$${cambio}</p>
    </div>
    `;

    resultados.innerHTML = template;

    }

    //// MAPA
/*
    function prepararConfiguracionParaLaGrafica(result) {

        // Creamos las variables necesarias para el objeto de configuración
        const tipoDeGrafica = "line";
        const nombresDeLasMoneda = result.map((moneda) => moneda.Codigo);
        const titulo = "Monedas";
        const colorDeLinea = "red";
        const valores = result.map((moneda) => {
        const valor = moneda.serie[0].valor.replace(",", ".");
        return Number(valor);
        });
        // Creamos el objeto de configuración usando las variables anteriores
        const config = {
        type: tipoDeGrafica,
        data: {
        labels: nombresDeLasMoneda,
        datasets: [{
            label: titulo,
            backgroundColor: colorDeLinea,
            data: valores
            }
            ]
            }
            };
            return config;
            }
    
    async function renderGrafica(result) {
        
        const config = prepararConfiguracionParaLaGrafica(result);
                const chartDOM = document.getElementById("myChart");
                new Chart(chartDOM, config);
                chartDOM.style.backgroundColor = "white";
                }
                
                */
