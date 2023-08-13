const container = document.querySelector(".container");
let numSquares = 64;
const button = document.querySelector("button");
container.style.height = `${window.innerHeight - button.style.height}px`;
for(let i = 0; i < numSquares; i++){
    newDiv = document.createElement("div");
    newDiv.classList.add(`childDiv`);
    newDiv.style.width = `${100/Math.sqrt(numSquares)}%`;
    newDiv.style.height = `${100/Math.sqrt(numSquares)}%`;
    newDiv.textContent = `div${window.innerWidth}, ${newDiv.style.width}`;
    newDiv.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue";
    })
    container.appendChild(newDiv);
}
