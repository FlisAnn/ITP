window.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("quote");
    let message = document.getElementById("message");

    showMeAQuote = () => {
        message.innerHTML = "Hello, how are you?"; // show this when user clicks button
    }
    button.addEventListener("click", showMeAQuote); 
});