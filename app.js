const themeBtn = document.getElementById("toggleTheme")
const body = document.body;

themeBtn.onclick = function() {
    if (themeBtn.className === "fas fa-moon") {
        themeBtn.className = "far fa-sun";
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";    
    } else {
        themeBtn.className = "fas fa-moon";
        body.style.backgroundColor = "#121415";
        body.style.color = "#fff";

    }
}