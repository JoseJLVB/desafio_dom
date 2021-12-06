//capturar input
const inputNumber = document.querySelector('#entrada');

//capturar elemento del evento
const event1 = document.querySelector('.resultado');

const event2 = document.querySelector('#evento')

//ejecutar evento del enlace 

event2.addEventListener('click', function() {
    
    let number = inputNumber.value;
    event1.innerHTML = `el número es: ${number}`;
})