const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form input")
const greeting = document.querySelector(".greeting")
const TODO_HIDDEN = document.querySelector(".todo_form")

const CLASS_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(CLASS_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(KEY_USERNAME, username);
    loginInput.value = null;
    paintGreeting(username);
    TODO_HIDDEN.classList.remove(CLASS_HIDDEN);
}

function paintGreeting(username) {
    greeting.innerText = `have a nice day, ${username}`
    greeting.classList.remove(CLASS_HIDDEN);
    TODO_HIDDEN.classList.remove(CLASS_HIDDEN);
}

const localUsername = localStorage.getItem(KEY_USERNAME)

if(localUsername === null) {
    loginForm.classList.remove(CLASS_HIDDEN)
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreeting(localUsername);
}