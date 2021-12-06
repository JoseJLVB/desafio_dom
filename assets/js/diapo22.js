const form = document.querySelector('#formulario');
const nombre = document.querySelector('.nombre')
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const resultado = document.querySelector('.resultado');



form.addEventListener('submit', function (ev) {
    //primero evitar que se recargue la pagina
    ev.preventDefault();

    //capturar email y password del usuario
    const nombre_usuario = nombre.value;
    const email_usuario = email.value;
    const password_usuario = password.value;

    resultado.innerHTML = `“Hola ${nombre_usuario}, tu correo electrónico es ${email_usuario} y tu clave es ${password_usuario}, bienvenido!!!”`

})