const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
        event.preventDefault();
        const username = loginInput.value
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem(USERNAME_KEY, username);
        greetingUser(username);
    }

 function greetingUser(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
 }


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    greetingUser(savedUsername);
};


