const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form')

const result = document.getElementById('result');

form.addEventListener('submit', sumar)

function sumar(event){
    console.log({event})
    // event.preventDefault();
    let val1 = parseInt(input1.value)
    let val2 = parseInt(input2.value)
    let suma = val1 + val2;
    result.innerText = "El resultado es: " + suma;
}