
function select(item, type){
    type = "."+type;
    console.log(type);
    let previousChoice = document.querySelector(type+"  .selected");
    if (previousChoice !== null){
       previousChoice.classList.remove("selected");  
    }
   

    item.classList.add("selected");
}