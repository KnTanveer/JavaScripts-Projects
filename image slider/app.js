let container = document.querySelector(".gallery")
const backBtn = document.getElementById("backBtn")
const nextBtn = document.getElementById("nextBtn")

container.addEventListener("wheel", (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
    container.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", () => {
    container.scrollLeft += 600;
    container.style.scrollBehaviour = "smooth";
});

backBtn.addEventListener("click", () => {
    container.scrollLeft -= 300;
    container.style.scrollBehaviour = "smooth";
});