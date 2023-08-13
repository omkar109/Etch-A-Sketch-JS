const container = document.querySelector(".container");
let numSquares = 16; //Represents number of squares in width/length
const button = document.querySelector("button");
container.style.height = `${window.innerHeight - button.style.height}px`;
generateGrid = function(numSquares){
    for(let i = 0; i < numSquares*numSquares; i++){
        newDiv = document.createElement("div");
        newDiv.classList.add(`childDiv`);
        newDiv.style.width = `${100/numSquares}%`;
        newDiv.style.height = `${100/numSquares}%`;
        //newDiv.textContent = `div${window.innerWidth}, ${newDiv.style.width}`;
        newDiv.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "blue";
        })
        container.appendChild(newDiv);
    }
}

clearGrid = function(){
    childDivs = document.querySelectorAll(".childDiv");
    childDivs.forEach((childDiv) => {
        childDiv.remove();
    })
}

changeGrid = function(numSquares){
    clearGrid();
    generateGrid(numSquares);
}

button.addEventListener("click", (event) => {
    numSquares = prompt("How many pixels wide do you want the grid? 100 pixel limit");
    if(parseInt(numSquares) > 100) numSquares = 100;
    changeGrid(parseInt(numSquares));
})

generateGrid(numSquares);