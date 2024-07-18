const correctUsername = "admin";
const correctPassword = "password123";


    document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const enteredUsername = document.getElementById("uname").value;
    const enteredPassword = document.getElementById("pass").value;

    const resultElement = document.getElementById("result");

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        resultElement.textContent = "Login successful!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect username or password.";
        resultElement.style.color = "red";
    }
});


function correctUsername() {
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;

    if(uname === correctUsername && pass === correctPassword)
    {

    }
    else
    {
    }
}