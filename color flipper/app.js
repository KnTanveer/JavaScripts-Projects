const box = document.getElementById("colorBox")

function setColor(name) {
    box.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    
    const color = `rgb(${red}, ${green}, ${blue})`
    box.style.backgroundColor = color;
}