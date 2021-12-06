const form = document.querySelector('#formulario');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function (ev) {
    //primero evitar que se recargue la pagina
    ev.preventDefault();

    //capturar email y password del usuario
    const email_usuario = email.value;
    const password_usuario = password.value;

    resultado.innerHTML = `El email ingresado es el ${email_usuario}, y su contraseña es ${password_usuario}`

})