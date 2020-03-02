function getSizeCost() {
  let selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}

function getCrustCost() {
  let selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getNumber() {
  var selectedNumber = document.getElementById("numberofpizza").value;
  return parseInt(selectedNumber);
}
function mozarellaCheese() {
  let cheese = 0;
  let addmozarellaCheese = document.getElementById("topping4");
  if (addmozarellaCheese.checked === true) {
      cheese = 110;
  }
  return parseInt(cheese);
}
function sausages() {
  let sausage = 0;
  let addsausage = document.getElementById("topping1");
  if (addsausage.checked === true) {
      sausage = 140;
  }
  return parseInt(sausage);
}
function onions() {
  let onion = 0;
  let addonions = document.getElementById("topping2");
  if (addMushroom.checked === true) {
      onion = 130;
  }
  return parseInt(onion);
}
function tikkaSaucee() {
  let tikkaSauce = 0;
  let addtikkaSauce = document.getElementById("topping3");
  if (addtikkaSauce.checked === true) {
      tikkaSauce = 120;
  }
  return parseInt(tikkaSauce);
}
function mushrooms() {
  let mushroom = 0;
  let addMushroom = document.getElementById("topping5");
  if (addMushroom.checked === true) {
      mushroom = 150;
  }
  return parseInt(mushroom);
}
function calctotalPrice(e) {
  event.preventDefault();
  let totalPrice = (getSizeCost() + getCrustCost() + mushrooms())  * (getNumber());
  
      console.log(totalPrice);
  alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}




$(document).ready(function () {
  $("#delivery").submit(function () {

      var name = $("input#name").val();
      var address = $("input#address").val();
      var location = $("input#location").val();

      alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 100/= welcome to  Pizza-ME .");
  });
  
});