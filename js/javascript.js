
function select(item, type){
    console.log(type);
    let previousChoice = document.querySelector(".selected");
    if (previousChoice !== null){
       previousChoice.classList.remove("selected");  
    }
   

    item.classList.add("selected");
}