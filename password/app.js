const text = document.getElementById("password")
const icon = document.getElementById("passwordIcon")
const message = document.getElementById("message")
const strength = document.getElementById("strength")
const passBox = document.getElementById("passwordBox")

function password() {
    if (text.type === "password") {
        text.type = "text";
        icon.className = "fas fa-eye";
    } else {
        text.type = "password";
        icon.className = "fas fa-eye-slash";
    }
}

text.addEventListener('input', () => {
    if (text.value.length > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
        passBox.style.color = "#c0c0c0";
    }  
    if (text.value.length < 4) {
        strength.innerHTML = "Weak";
        passBox.style.borderColor = "red";
        message.style.color = "red";
    } else if (text.value.length >=4 && text.value.length < 8) {
        strength.innerHTML = "Medium";
        passBox.style.borderColor = "yellow";
        message.style.color = "yellow";
    } else if (text.value.length >= 8) {
        strength.innerHTML = "Strong";
        passBox.style.borderColor = "green";
        message.style.color = "green";
    }
});

document.addEventListener('keydown', function(event) {
     if (event.key === "Enter") {
        if (text.value.length >= 8) {
            alert("Password has been set successfully!");
            passBox.style.borderColor = "#c0c0c0"
            message.style.display = "none";
            text.value = ""
        } else {
            alert("Your password must be at least 8 characters long.");
            passBox.style.borderColor = "#c0c0c0"
            message.style.display = "none";
            text.value = ""
        }
     }
});

