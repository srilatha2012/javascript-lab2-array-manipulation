let item = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let unOrderedList = document.getElementById("uItemList");
let removeItemButton = document.getElementById("removeLastItemButton");

let itemListArray = [];

function renderList() {
    unOrderedList.innerHTML = "";
    //loop throug each item in the array
    for (let i = 0; i < itemListArray.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = itemListArray[i];
        unOrderedList.appendChild(listItem);

    }
}

addItemButton.addEventListener('click', function () {
    let itemText = item.value.trim();
    if (itemText === "") {
        alert('Please enter an item');
        return;
    }
    itemListArray.push(itemText)
    renderList();
    //clear the input field
    item.value = "";
}
);
//remove the last items and updates the displayed list
removeItemButton.addEventListener('click', function () {
    if(itemListArray.length ==0) {
        alert("No items to remove");
        return;
    }
    itemListArray.pop();
    renderList();
});