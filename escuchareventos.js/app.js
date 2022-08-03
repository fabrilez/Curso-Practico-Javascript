const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular');

const result = document.getElementById('result');

function btnOnClick(){
    let val1 = parseInt(input1.value)
    let val2 = parseInt(input2.value)
    let suma = val1 + val2;
    result.innerText = "El resultado es: " + suma;
}

