let shoppingList = [];

//add item to the list
function addItem(item) {
    //check for null, undefined, non string values
    if (item == null || typeof item !== "string") {
        return;
    }
    //remove extra spaces
    let trimmedItem = item.trim();

    //check for empty string
    if (trimmedItem === "") {
        return;
    }
    shoppingList.push(trimmedItem);
}
//remove the last item from the list
function removeLastItem() {
    shoppingList.pop();
}

//display all items in the list
function displayList() {
    for (let item of shoppingList) {
        console.log(`all items:  ${item}`);
    }

}

addItem('item1');
addItem('item2');
addItem('item3');
//console.log(shoppingList);
for (let item of shoppingList) {
    console.log(item);
}
removeLastItem();
displayList();
