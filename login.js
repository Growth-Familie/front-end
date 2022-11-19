const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@parenting.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
  

    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    if (email == expectedEmail && password == expectedPassword) {
        goToHome();
    } else {
        showPopUp();
    }
    
});