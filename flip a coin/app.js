const coin = document.querySelector(".coin");
let rotation = 0;

function flipCoin() {
    const result = Math.random() < 0.5 ? "heads" : "tails";
    rotation += 1800;

    if (result === 'heads') {
        coin.style.transform = `rotateX(${rotation}deg)`
    } else {
        coin.style.transform = `rotateX(${rotation + 180}deg)`
    }
}