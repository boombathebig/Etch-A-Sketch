

//creates the initial grid area
var gridsize = 4
var createGrid=document.createElement("div");
function gridCreationFunction(){
document.body.appendChild(createGrid);
createGrid.style.display = "grid";
createGrid.classList.add("gridContainer");
createGrid.style.width= "800px";
createGrid.style.height="800px";
createGrid.style.border= "solid";
createGrid.style.marginTop="20px";
}
gridCreationFunction();

const gridContainer= document.querySelector(".gridContainer");

//creates individual grid squares 
function gridMake(num) {
  for(let i=0; i<num * num;i++){
    let grid= document.createElement('div');
    grid.classList.add('sqr');
    grid.style.background= "grey";
    gridContainer.appendChild(grid);
   //set style of grid container, specifically the column / row rules
    createGrid.style.gridTemplateColumns= "repeat(" + num  + ", 1fr)";
    createGrid.style.gridTemplateRows= "repeat(" + num  + ", 1fr)";
    
  }



   }
gridMake(gridsize);
//color the grid black when hovered
var colorSquares= document.querySelectorAll(".sqr");
function colorFunction(){
  var colorSquares2= document.querySelectorAll(".sqr");  
colorSquares2.forEach(element => {
  element.addEventListener('mouseover', function(e){
    element.style.backgroundColor= "black";
  })})};
colorFunction();
 
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
  let gridsize= prompt("How many squares would you like per side?");
  gridMake(gridsize);
  colorFunction();

});
  



