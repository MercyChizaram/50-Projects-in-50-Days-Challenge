const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (password !== confirm) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    } else {
        message.textContent = "Registration form submitted!";
        message.style.color = "green";
        form.reset();
    }
});
