const input = document.querySelector ('.input-a-buscar');
const boton = document.querySelector ('#boton');
const resultado = document.querySelector ('.resultado');

boton.addEventListener ('click', function(){
    //primero capturo lo que el usuario escribio
    const texto_input = input.value;
    //despues lo escribio en el parrafo de clase "resultado"
    resultado.innerHTML = '<b>' + texto_input + '</b>';
})
