let inputs = document.querySelectorAll(".valor");



//Implementación de la API 

let url="https://api.exchangeratesapi.io/latest?symbols=USD,BRL,JPY";

fetch(url)
    .then(response => response.json() )
    .then(data => {
        document.querySelector("#USD").dataset.cambio = data.rates.USD;
        document.querySelector("#BRL").dataset.cambio = data.rates.BRL;
        document.querySelector("#JPY").dataset.cambio = data.rates.JPY;



        inputs.forEach(input => {
         input.value = input.dataset.cambio;
        });
    })
    .catch(error  => console.error(error) )
    
function valorModificado(input){
    let factor = input.value / input.dataset.cambio;  

    inputs.forEach(function mostrarValor(input){
        input.value = (input.dataset.cambio * factor).toFixed(2);
        });

}

  


