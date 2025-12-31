const text = document.getElementById("password")
const icon = document.getElementById("passwordIcon")

function password() {
    if (text.type === "password") {
        text.type = "text";
        icon.className = "fas fa-eye";
    } else {
        text.type = "password";
        icon.className = "fas fa-eye-slash";
    }
}