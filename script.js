function createGridBox(){
    var div1= document.createElement("div");
    document.getElementById("grid").appendChild(div1);
    div1.className = "griddy";
    div1.id="box"+i;
}
i=0;
while (i<16){
    createGridBox();
    i++;
}


document.addEventListener("mouseover", function(e){
   const pressed = document.querySelector(`.griddy[id=${event.target.id}]`)
     console.log(event)
     console.log(pressed)
   pressed.classList.add("hovered");
  

       
   });
  
