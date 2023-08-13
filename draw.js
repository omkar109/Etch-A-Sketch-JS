const container = document.querySelector(".container");
let numSquares = 9;
for(let i = 0; i < numSquares; i++){
    newDiv = document.createElement("div");
    newDiv.classList.add(`childDiv`);
    newDiv.style.width = `${window.innerWidth/Math.sqrt(numSquares)}px`;
    newDiv.style.height = `${window.innerHeight/Math.sqrt(numSquares)}px`;
    //newDiv.textContent = `div${window.innerWidth}, ${newDiv.style.width}`;
    newDiv.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue";
    })
    container.appendChild(newDiv);
}

console.log(window.innerWidth);