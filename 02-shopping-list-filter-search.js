let shoppingList = [];
function addItem(item) {
    //check for null, undefined, non string values
    if(item ==null || typeof item !=="string") {
        return;
    }
    //remove extra spaces
    let trimmedItem = item.trim();

    //check for empty string
    if(trimmedItem === "") {
        return;
    }
    let normalizedItem = trimmedItem.toLowerCase();
    let foundItems = shoppingList.filter(temp => temp.toLowerCase() === normalizedItem);
    if (foundItems.length === 0) {
        shoppingList.push(trimmedItem);
    }
}

function filterItems(searchItem) {
//check for null, undefined, non string values
    if(searchItem ==null || typeof searchItem !=="string") {
        return;
    }
   // remove extra spaces
   let trimmedSearchItem = searchItem.trim();

   //check for empty string after trimming
   if(trimmedSearchItem ==="") {
    return;
   }

    let normalizedSearchItem = trimmedSearchItem.toLowerCase();
    let matchedItems  = shoppingList.filter(item =>
         item.toLowerCase().includes(normalizedSearchItem)
    );
    return matchedItems;
}

addItem("Apple");
addItem("Banana");
addItem("apple");
addItem("Grapes");
addItem("Pineapple")
let matchedItems = filterItems('app');
console.log(matchedItems);