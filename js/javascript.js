let dishPrice = 0;
let drinkPrice = 0;
let dessertPrice = 0;

function getSelectedItem(itemCategory){
    itemCategory = "."+itemCategory;
    let item = document.querySelector(itemCategory+" .selected");
    return item;
}

function validateOrderButton(){
    let dish = getSelectedItem("dishes");
    let drink = getSelectedItem("drinks");
    let dessert = getSelectedItem("desserts");

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
    button.removeAttribute("disabled");
}

function updateBill(itemCategory, price ){
    switch (itemCategory){
        case "dishes": 
            dishPrice = price;
            break;
        case "drinks":
            drinkPrice = price;
            break;
        case "desserts":
            dessertPrice = price;
            break;
        default:
            console.log("Problema em reconhecer categoria do item! em updateBill");
    }
}

function selectItem(item, price, itemCategory){
    updateBill(itemCategory, price);

    let previousChoice = getSelectedItem(itemCategory);
    if (previousChoice !== null){
       previousChoice.classList.remove("selected");  
    }
   
    item.classList.add("selected");

    if(validateOrderButton()){
        eneableOrderButton();
    }
}

function showOrderItems(total){
    let dishName = getSelectedItem("dishes").querySelector(".option-title").innerHTML;
    let dishPrice = getSelectedItem("dishes").querySelector(".option-price").innerHTML;
    let drinkName = getSelectedItem("drinks").querySelector(".option-title").innerHTML;
    let drinkPrice = getSelectedItem("drinks").querySelector(".option-price").innerHTML;
    let dessertName = getSelectedItem("desserts").querySelector(".option-title").innerHTML;
    let dessertPrice = getSelectedItem("desserts").querySelector(".option-price").innerHTML;

    let dishSelectedName = document.querySelector(".dish-name");
    let dishSelectedPrice = document.querySelector(".dish-price");
    dishSelectedName.innerHTML = dishName;
    dishSelectedPrice.innerHTML = dishPrice;

    let drinkSelectedName = document.querySelector(".drink-name");
    let drinkSelectedPrice = document.querySelector(".drink-price");
    drinkSelectedName.innerHTML = drinkName;
    drinkSelectedPrice.innerHTML = drinkPrice;

    let dessertSelectedName = document.querySelector(".dessert-name");
    let dessertSelectedPrice = document.querySelector(".dessert-price");
    dessertSelectedName.innerHTML = dessertName;
    dessertSelectedPrice.innerHTML = dessertPrice;

    let totalToPay = document.querySelector(".total-to-pay");
    totalToPay.innerHTML = total;
}

function confirmOrderDisplay(total){
    let confirmOrderDiv = document.querySelector(".confirmOrder-container");
    confirmOrderDiv.style.display = "flex";
    showOrderItems(total);
}

function calculateTotal(){
    let total = dishPrice + drinkPrice + dessertPrice;
    total=total.toFixed(2);
    return total;
}
function closeOrder(){
    let total = calculateTotal();
    confirmOrderDisplay(total);
}

function formatWhatsappMsg(name, adress){
    let dishName = getSelectedItem("dishes").querySelector(".option-title").innerHTML;
    let drinkName = getSelectedItem("drinks").querySelector(".option-title").innerHTML;
    let dessertName = getSelectedItem("desserts").querySelector(".option-title").innerHTML;


    let msg = "Olá, gostaria de fazer o pedido:\n - Prato: "+dishName+"\n - Bebida: "+drinkName+"\n - Sobremesa: "+dessertName+"\nTotal: R$ "+calculateTotal();
    msg = msg+"\nNome: "+name+"\nEndereço: "+adress;
    return msg;
}

function confirm(){
    let userName = prompt("Seu nome:");
    let userAdress = prompt("Seu endereço:");
    let msg = formatWhatsappMsg(userName, userAdress);
    let encodedMsg = encodeURI(msg);
    let uri = "https://wa.me/5514998375261?text=";
    uri = uri+encodedMsg;
    window.open(uri);

    let confirmOrderDiv = document.querySelector(".confirmOrder-container");
    confirmOrderDiv.style.display = "none";
}

function cancel(){
    let confirmOrderDiv = document.querySelector(".confirmOrder-container");
    confirmOrderDiv.style.display = "none";
}

