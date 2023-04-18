// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 

// Create an array containing the names of all items in the inventory maximum of 10.

let ArrayyItems = ["milk","juice","flour","butter","vegetables","fruits","bread"]

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let ArrayyItemsQuantity = {
    "milk":20,
    "juice":80,
    "flour":50,
    "butter":60,
    "vegetables":90,
    "fruits":70,
    "bread":30,
}

// Write a function to add a new item to the inventory, updating both arrays.
function updateItem(name, quantity) {
    ArrayyItems[name] = quantity;
    console.log(`new item ${name} is ${quantity}.`);
}
updateItem("stationary", 100);

// Write a function to update the stock quantity of an existing item.
function updateArrays(name,newquantity) {
    const i = ArrayyItems.indexOf(name);
  if (i !== -1) {
    ArrayyItems[i] = name;
  } else {
    fruits.push(name);
  }
  ArrayyItemsQuantity[name] = newquantity;

  console.log(`Updated ${name} with ${newquantity}.`);
}
updateArrays("vegetables",40)


// Write a function to calculate the total number of items in the inventory.
function totalItems() {
    return ArrayyItems.length;
  }

console.log(totalItems());

// Write a function to find the item with the lowest stock quantity.


function lowestStockquantity() {
     
     let i = 0;
    for (let i = 0; i < ArrayyItemsQuantity.length; i++) {
      if (ArrayyItemsQuantity[i] < ArrayyItemsQuantity[i]) {
      
      }
    }
    return ArrayyItems[i];
  }
 
  console.log(lowestStockquantity());