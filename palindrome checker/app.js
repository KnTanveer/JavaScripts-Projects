const input = document.getElementById("textInput");

function check() {
    const reverse = input.value.split("").reverse().join("")
    
    if (reverse === input.value) {
        alert(input.value + " is a palindrome")
    } else {
        alert(input.value + " is not a palindrome")
    }

    input.value = ""
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        check();
    }
});