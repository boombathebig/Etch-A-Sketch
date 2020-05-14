
var createGrid=document.createElement("div");
document.body.appendChild(createGrid);
createGrid.style.display = "grid";
createGrid.classList.add("gridContainer");
createGrid.style.width= "800px";
createGrid.style.height="700px";
createGrid.style.borderStyle="dashed";

const gridContainer= document.querySelector(".gridContainer");

function gridMake(num) {
  for(let i=0; i<num * num;i++){
    let grid= document.createElement('div');
    grid.classList.add('sqr');
    grid.style.border= "1px solid gray";
    grid.style.gridTemplateColumns= `repeat(${num}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${num}, 1fr)`;
    gridContainer.appendChild(grid);
    
  }
  

   }
gridMake(4);
