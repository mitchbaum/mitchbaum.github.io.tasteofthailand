// set car array variable
var arrayOfItems = [{name: "Pork Dumplings (6)", price: 6.95},
          {name: "Egg Rolls (4)", price: 5.95},
          {name: "Spring Rolls (2)", price: 4.95},
          {name: "Cream Cheese Wontons (6)", price: 5.95},
          {name: "Pad Thai", price: 11.95},
          {name: "Drunken Noodles", price: 11.95},
          {name: "Thai Lo Mein Noodles", price: 10.95},
          {name: "Red Curry", price: 9.95},
          {name: "Massaman Curry", price: 9.95},
          {name: "Pineapple Curry", price: 8.95},
          {name: "Peanut Curry", price: 9.95},
          {name: "Jasmine Rice", price: 2.95},
          {name: "Fried Rice", price: 7.95},
          {name: "Fried Ice Cream", price: 5.95},
          {name: "Thai Custard", price: 5.95},
          {name: "Mango and Sweet Sticky Rice", price: 5.95}];



var itemName = [];
var aLen = arrayOfItems.length;

for (i= 0; i < aLen; i++){
    itemName.push(arrayOfItems[i].name);
}


var itemPrice = [];
for (i= 0; i < aLen; i++){
    itemPrice.push(arrayOfItems[i].price);
}

var arrayOfImages = document.getElementsByClassName("add-to-order-btn")
// add tooltip
for (i = 0; i < arrayOfImages.length; i++) {
  arrayOfImages[i].setAttribute("title", "Add to order");
}


//onload function that will load array data about price and make/model to textbox display
var totalPrice = 0;
var order = "";
var purchase = document.getElementById("totalPriceFormatted");
var itemTallyDumpling = 0;
var itemTallyEggRolls = 0;
var itemTallySpringRolls = 0;
var itemTallyWonton = 0;
var itemTallyPadThai = 0;
var itemTallyDrunken = 0;
var itemTallyLoMein = 0;
var itemTallyRed = 0;
var itemTallyMassaman = 0;
var itemTallyPineapple = 0;
var itemTallyPeanut = 0;
var itemTallyWhiteRice = 0;
var itemTallyFriedRice = 0;
var itemTallyIceCream = 0;
var itemTallyCustard = 0;
var itemTallySticky = 0;
window.onload = function() {
    //Total price and order variable
    function myClick() {
        if (this.id == 0) {
            order = order.concat(itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyDumpling += 1;
            document.getElementById("dumpling-counter").innerHTML = itemTallyDumpling;
            document.getElementById("dumpling-counter").style.display = "inline-block";
        }
        else if (this.id == 1) {
            var meatSelectorEggRolls = document.getElementById("meat-egg-rolls").selectedIndex;
            var meatChoiceEggRolls = document.getElementsByTagName("option")[meatSelectorEggRolls].value;
            order = order.concat(meatChoiceEggRolls + " " +itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyEggRolls += 1;
            document.getElementById("egg-roll-counter").innerHTML = itemTallyEggRolls;
            document.getElementById("egg-roll-counter").style.display = "inline-block";
            
        }
        else if (this.id == 2){
            var meatSelectorSpringRolls = document.getElementById("meat-spring-rolls").selectedIndex;
            var meatChoiceSpringRolls = document.getElementsByTagName("option")[meatSelectorSpringRolls].value;
            order = order.concat(meatChoiceSpringRolls + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallySpringRolls += 1;
            document.getElementById("spring-roll-counter").innerHTML = itemTallySpringRolls;
            document.getElementById("spring-roll-counter").style.display = "inline-block";
        }
        else if (this.id == 3){
            order = order.concat(itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyWonton += 1;
            document.getElementById("wonton-counter").innerHTML = itemTallyWonton;
            document.getElementById("wonton-counter").style.display = "inline-block";
        }
        else if (this.id == 4){
            var meatSelectorPadThai = document.getElementById("meat-pad-thai").selectedIndex;
            var meatChoicePadThai = document.getElementsByTagName("option")[meatSelectorPadThai].value;
            order = order.concat(meatChoicePadThai + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyPadThai += 1;
            document.getElementById("pad-thai-counter").innerHTML = itemTallyPadThai;
            document.getElementById("pad-thai-counter").style.display = "inline-block";
        }
        else if (this.id == 5){
            var meatSelectorDrunkenNoodles= document.getElementById("meat-drunken-noodles").selectedIndex;
            var meatChoiceDrunkenNoodles = document.getElementsByTagName("option")[meatSelectorDrunkenNoodles].value;
            order = order.concat(meatChoiceDrunkenNoodles + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyDrunken += 1;
            document.getElementById("drunken-counter").innerHTML = itemTallyDrunken;
            document.getElementById("drunken-counter").style.display = "inline-block";
        }
        else if (this.id == 6){
            var meatSelectorLoMein = document.getElementById("meat-lo-mein").selectedIndex;
            var meatChoiceLoMein = document.getElementsByTagName("option")[meatSelectorLoMein].value;
            order = order.concat(meatChoiceLoMein + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyLoMein += 1;
            document.getElementById("lo-mein-counter").innerHTML = itemTallyLoMein;
            document.getElementById("lo-mein-counter").style.display = "inline-block";
            
        }
        else if (this.id == 7){
            var meatSelectorRedCurry = document.getElementById("meat-red-curry").selectedIndex;
            var meatChoiceRedCurry = document.getElementsByTagName("option")[meatSelectorRedCurry].value;
            order = order.concat(meatChoiceRedCurry + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyRed += 1;
            document.getElementById("red-counter").innerHTML = itemTallyRed;
            document.getElementById("red-counter").style.display = "inline-block";
            
        }
        else if (this.id == 8){
            var meatSelectorMassamanCurry = document.getElementById("meat-massaman-curry").selectedIndex;
            var meatChoiceMassamanCurry = document.getElementsByTagName("option")[meatSelectorMassamanCurry].value;
            order = order.concat(meatChoiceMassamanCurry + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyMassaman += 1;
            document.getElementById("massaman-counter").innerHTML = itemTallyMassaman;
            document.getElementById("massaman-counter").style.display = "inline-block";
        }
        else if (this.id == 9){
            var meatSelectorPineappleCurry = document.getElementById("meat-pinneapple-curry").selectedIndex;
            var meatChoicePineappleCurry = document.getElementsByTagName("option")[meatSelectorPineappleCurry].value;
            order = order.concat(meatChoicePineappleCurry + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyPineapple += 1;
            document.getElementById("pineapple-counter").innerHTML = itemTallyPineapple;
            document.getElementById("pineapple-counter").style.display = "inline-block";
        }
        else if (this.id == 10){
            var meatSelectorPeanutCurry = document.getElementById("meat-peanut-curry").selectedIndex;
            var meatChoicePeanutCurry = document.getElementsByTagName("option")[meatSelectorPeanutCurry].value;
            order = order.concat(meatChoicePeanutCurry + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyPeanut += 1;
            document.getElementById("peanut-counter").innerHTML = itemTallyPeanut;
            document.getElementById("peanut-counter").style.display = "inline-block";
            
        }
        else if (this.id == 11){
            order = order.concat(itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyWhiteRice += 1;
            document.getElementById("white-rice-counter").innerHTML = itemTallyWhiteRice;
            document.getElementById("white-rice-counter").style.display = "inline-block";
        }
        else if (this.id == 12){
            var meatSelectorFriedRice = document.getElementById("meat-fried-rice").selectedIndex;
            var meatChoiceFriedRice  = document.getElementsByTagName("option")[meatSelectorFriedRice ].value;
            order = order.concat(meatChoiceFriedRice  + " " + itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyFriedRice += 1;
            document.getElementById("fried-rice-counter").innerHTML = itemTallyFriedRice;
            document.getElementById("fried-rice-counter").style.display = "inline-block";
        }
        else if (this.id == 13){
            order = order.concat(itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyIceCream += 1;
            document.getElementById("ice-cream-counter").innerHTML = itemTallyIceCream;
            document.getElementById("ice-cream-counter").style.display = "inline-block";
        }
        else if (this.id == 14){
            order = order.concat(itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallyCustard += 1;
            document.getElementById("custard-counter").innerHTML = itemTallyCustard;
            document.getElementById("custard-counter").style.display = "inline-block";
        }
        else if (this.id == 15){
            order = order.concat(itemName[this.id] + " " + " - $" + itemPrice[this.id] +"\n");
            totalPrice = totalPrice + itemPrice[this.id];
            totalPriceFormatted = totalPrice.toFixed(2);
            itemTallySticky += 1;
            document.getElementById("sticky-counter").innerHTML = itemTallySticky;
            document.getElementById("sticky-counter").style.display = "inline-block";
        }
        
        

        //display order on textarea
        document.getElementById("order").value = order;
        //display totalPriceFormatted on output
        document.getElementById("totalPriceFormatted").value = "Total: $" + totalPriceFormatted;
        }
    for (i = 0; i < arrayOfImages.length; i++) {
      arrayOfImages[i].addEventListener("click", myClick);
      }
    //add event listener for clicking the clear order button to the order and total price are reset
      document.getElementById("clearOrder").addEventListener("click", clickHandler);
      function clickHandler() {
        //reset order to empty string
        order = "";
        //reset textarea to empty
        document.getElementById("order").value = order;
        //reset totalPrice to empty
        totalPrice = 0;
        document.getElementById("totalPriceFormatted").value = "";
        //reset counter to 0
        itemTallyDumpling = 0;
        itemTallyEggRolls = 0;
        itemTallySpringRolls = 0;
        itemTallyWonton = 0;
        itemTallyPadThai = 0;
        itemTallyDrunken = 0;
        itemTallyLoMein = 0;
        itemTallyRed = 0;
        itemTallyMassaman = 0;
        itemTallyPineapple = 0;
        itemTallyPeanut = 0;
        itemTallyWhiteRice = 0;
        itemTallyFriedRice = 0;
        itemTallyIceCream = 0;
        itemTallyCustard = 0;
        itemTallySticky = 0;
        document.getElementById("dumpling-counter").innerHTML = "";
        document.getElementById("dumpling-counter").style.display = "none";
        
        document.getElementById("egg-roll-counter").innerHTML = "";
        document.getElementById("egg-roll-counter").style.display = "none";
        
        document.getElementById("spring-roll-counter").innerHTML = "";
        document.getElementById("spring-roll-counter").style.display = "none";
        
        document.getElementById("wonton-counter").innerHTML = "";
        document.getElementById("wonton-counter").style.display = "none";
        
        document.getElementById("pad-thai-counter").innerHTML = "";
        document.getElementById("pad-thai-counter").style.display = "none";
        
        document.getElementById("drunken-counter").innerHTML = "";
        document.getElementById("drunken-counter").style.display = "none";

        document.getElementById("lo-mein-counter").innerHTML = "";
        document.getElementById("lo-mein-counter").style.display = "none";
        
        document.getElementById("red-counter").innerHTML = "";
        document.getElementById("red-counter").style.display = "none";
        
        document.getElementById("massaman-counter").innerHTML = "";
        document.getElementById("massaman-counter").style.display = "none";
        
        document.getElementById("pineapple-counter").innerHTML = "";
        document.getElementById("pineapple-counter").style.display = "none";
        
        document.getElementById("peanut-counter").innerHTML = "";
        document.getElementById("peanut-counter").style.display = "none";
        
        document.getElementById("white-rice-counter").innerHTML = "";
        document.getElementById("white-rice-counter").style.display = "none";
            
        document.getElementById("fried-rice-counter").innerHTML = "";
        document.getElementById("fried-rice-counter").style.display = "none";
        
        document.getElementById("ice-cream-counter").innerHTML = "";
        document.getElementById("ice-cream-counter").style.display = "none";
        
        document.getElementById("custard-counter").innerHTML = "";
        document.getElementById("custard-counter").style.display = "none";
        
        document.getElementById("sticky-counter").innerHTML = "";
        document.getElementById("sticky-counter").style.display = "none"; 
        
      }
    // add click event handler for check-out button
      document.getElementById("check-out-button").addEventListener("click",function() {
        if (order == "") {
            alert("Please add at least one item to your order.");
        }
        else {
            localStorage.setItem("purchase", purchase.value = totalPriceFormatted);
            window.alert("Your Order Total: $" + localStorage.getItem("purchase"));
            document.getElementById("order_form").submit();
      // submits the form, redirects to checkout page, see form
        }
      });
  };




  


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

