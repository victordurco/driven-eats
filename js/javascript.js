
function validateOrderButton(){
    let dish = document.querySelector(".dishes .selected");
    let drink = document.querySelector(".drinks .selected");
    let dessert = document.querySelector(".desserts .selected");

    if (dish !== null && drink!== null && dessert !== null){
        return true;
    }else{
        return false;
    }
}

function eneableOrderButton(){
    let button = document.querySelector(".close-order");
    button.classList.add("activate-button");
    button.innerHTML = "Fechar pedido";
}

function selectItem(item, type){
    type = "."+type;
    let previousChoice = document.querySelector(type+"  .selected");
    if (previousChoice !== null){
       previousChoice.classList.remove("selected");  
    }
   
    item.classList.add("selected");

    if(validateOrderButton()){
        eneableOrderButton();
    }
}


