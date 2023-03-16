const singupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const singup = document.querySelector(".singup");
const login = document.querySelector(".login");
let flag = false
localStorage.setItem('flag', false)
function validation() {
}

loginBtn.addEventListener("click", () => {
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginForm");
    singup.classList.remove("singupForm");
    moveBtn.innerHTML = "Login";
})

singupBtn.addEventListener("click", () => {
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginForm");
    singup.classList.add("singupForm");
    moveBtn.innerHTML = "Singup";
})


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;


    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');

    }


    else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    }
    else if (!password.value.match(upperCaseLetters)) {
        setError(password, 'please add 1 uppercase letter');
    }
    else if (!password.value.match(lowerCaseLetters)) {
        setError(password, 'please add 1 lovercase letter');

    }
    else if (password.value.length < 8) {
        setError(password, 'mini of 8');

    }
    else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    }
    else {
        setSuccess(password2);
    }

};



function store() {

    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (email.value.length == 0) {
        console.log('Please fill in email');

    } else if (password.value.length == 0) {
        console.log('Please fill in password');

    } else if (email.value.length == 0 && password.value.length == 0) {
        console.log('Please fill in email and password');

    } else if (password.value.length < 8) {
        console.log('mini of 8');

    } else if (!password.value.match(numbers)) {
        console.log('please add number');

    } else if (!password.value.match(upperCaseLetters)) {
        console.log('please add 1 uppercase letter');

    } else if (!password.value.match(lowerCaseLetters)) {
        console.log('please add 1 lovercase letter');

    } else {
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('flag', true)


    }
}

function check() {
    var storedemail = localStorage.getItem('email');
    var storedpassword = localStorage.getItem('password');


    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var userRemember = document.getElementById("rememberMe");

    if (email.value == storedemail && password.value == storedpassword) {
        alert('You are logged in.');
        localStorage.setItem('flag', true)


    } else {
        document.getElementById('login_btn')
        localStorage.setItem('flag', true)

        //alert('Error on login');
        //alert("successfully registered")
        //dispatchEvent(false)

    }
}