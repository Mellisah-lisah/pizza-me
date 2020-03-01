function getSizeCost() {
  var selectedSize = document.getElementById("size").nodeValue;
  return parseInt(selectedSize);
}

function getCrustCost() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}

function getNumber() {
  var selectedNumber = document.getElementById("numberofPizza").value;
  return parseInt("selectedNumber");
}

function mushrooms() {
  var mushroom = 0;
  var addMushroom = document.getElementById("toppingone");
  if (addMushroom.checked === true) {
    mushroom = 200;
  }
  return parseInt(mushroom);
}
function mozarellaCheese () {
  var cheese = 0;
  var addmozarellaCheese = document.getElementById("tropping");
  if (addmozarellaCheese.checked === true) {
    cheese = 150;
  }
  return parseInt(cheese);
}

function onions() {
  var onion = 0;
  var addonions = document.getElementById("troppingone");
  if (addonions.checked ===true) {
  onion = 130;
}
return parseInt(onion);
}
function tikkaSauce() {
 var tikkaSauce = 0;
 var addtikkaSauce = document.getElementById("toppingone");
 if ("addtikkaSauce.checked === true") {
   tikkaSauce = 120;
 }
 return parseInt(tikkaSauce); 
}
function sausage() {
  var sausage = 0;
  var addsausage = document.getElementById("troppingone");
  if (addsausage.checked === true) {
    sausage = 110;
  }
  return parseInt(sausage);
}
$("button#complete-order").click(function() {
  $(".delvery").show();
});
$("button#yes").click(function() {
  $(".delivery").hide();
  $(".location").show();
});
$("button#location-send").click(function() {
  $(".location").hide();
  var location = $("input#yourlocation").val();
  $("#text").text(" Please  Enter Your Location" + location + "");
  $(".pyment").show();
});
$("input#yourLocation").val("");
$("button#no").click(function() {
  $(".delivery").hide();
  $(".noDelivery").show();
})