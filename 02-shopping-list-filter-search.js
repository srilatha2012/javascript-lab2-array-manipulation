let shoppingList = [];
function addItem(item) {
    let foundItems = shoppingList.filter(temp => temp === item);
    if (foundItems.length === 0) {
        shoppingList.push(item);
    }

    // if(!shoppingList.includes(item)) {
    //   shoppingList.push(item);
    // }

}

function filterItems(searchItem) {
    let matchedItems =[];
    matchedItems = shoppingList.filter(item => item === searchItem);
    return matchedItems; 
}
let matchedItems=filterItems('apple');
console.log(matchedItems);