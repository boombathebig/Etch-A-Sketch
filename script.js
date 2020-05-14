

//creates the initial grid area
var gridsize = 4
var createGrid=document.createElement("div");
function gridCreationFunction(){
document.body.appendChild(createGrid);
createGrid.style.display = "grid";
createGrid.classList.add("gridContainer");
createGrid.style.width= "800px";
createGrid.style.height="700px";
createGrid.style.borderStyle="dashed";
}
gridCreationFunction();

const gridContainer= document.querySelector(".gridContainer");

//creates individual grid squares 
function gridMake(num) {
  for(let i=0; i<num * num;i++){
    let grid= document.createElement('div');
    grid.classList.add('sqr');
    grid.style.border= "1px solid gray";
    gridContainer.appendChild(grid);
    createGrid.style.gridTemplateColumns= "repeat(" + num  + ", 1fr)";
    createGrid.style.gridTemplateRows= "repeat(" + num  + ", 1fr)";
    
  }
//set style of grid container, specifically the column / row rules


   }
gridMake(gridsize);
//color the grid black when hovered
var colorSquares= document.querySelectorAll(".sqr");
colorSquares.forEach(element => {
  element.addEventListener('mouseover', function(e){
    element.style.backgroundColor= "black";
  })});

 
// event listener giving button it's purpose

var button= document.querySelector("#reset");

button.addEventListener("click", function(){
  colorSquares.forEach(element => {
  element.style.backgroundColor= "white";
  
  })
  var clearList= document.querySelector(".gridContainer");
while(clearList.hasChildNodes()) {
    clearList.removeChild(clearList.firstChild);
}
  let gridsize= Math.sqrt(prompt("give me a number"));
  gridMake(gridsize);

});
  



