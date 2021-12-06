function quejidoBoton () {
    alert('Auuuuuuch!!!!!!!')
}
function cambiar_pagina () {

    // el elemento de id "textoSaludo" e cambiamos el texto
    const texto_saludo = document.querySelector('#textoSaludo');
    texto_saludo.innerHTML = 'Hola, este párrafo fué modificado';
    
    const entrada_uno = document.querySelector('#entradaUno');
    entrada_uno.setAttribute('value', 'Clic Aqui');
    entrada_uno.setAttribute('id', 'clicUno');
    entrada_uno.setAttribute('type', 'button');
    
    entrada_uno.style.color = 'red';
    // entrada_uno.style.background-color = 'green';
    entrada_uno.setAttribute('class', 'fondo-verde');

    /*entrada_uno.addEventListener('click', function () {
        alert('Ouch!!!');
    });*/

    entrada_uno.addEventListener('click', quejidoBoton);
}