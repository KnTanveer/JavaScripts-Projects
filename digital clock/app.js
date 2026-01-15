let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval( () => {
    let currentTime = new Date();

    hrs.innerHTML = String(currentTime.getHours()).padStart(2, "0");
    mins.innerHTML = String(currentTime.getMinutes()).padStart(2, "0");
    secs.innerHTML = String(currentTime.getSeconds()).padStart(2, "0");
}, 1000)