function cambiar_pagina () {

    // seleccionar el elemento de id "lista1" y cambiamos el texto
    const lista1 = document.querySelector('#lista1');
    lista1.innerHTML = 'Ingrese el nombre:';

    //seleccionar el elmento id "lista2" y modificar type, value e id.
    const lista2 = document.querySelector('#lista2');
    lista2.setAttribute('type', 'submit');
    lista2.setAttribute('value', 'Enviar Formulario');
    lista2.setAttribute('id', 'envioFormulario');

    //lista 2 style color y background-color
    lista2.style.color = 'blue';
    lista2.style['background-color'] = 'gray';
}