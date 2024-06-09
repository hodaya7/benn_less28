const SELECTED_ROW_CLASS_NAME = "selected-row";

document.querySelector("#button-1").addEventListener("click", function(){
    var selectedRow = document.querySelector(".first-row");
    selectedRow.classList.toggle("table-success");
    selectedRow.classList.toggle(SELECTED_ROW_CLASS_NAME);
    var selectedButton = document.querySelector("#button-1");
    toggleButtonText(selectedButton);
});

document.querySelector("#button-2").addEventListener("click", function(){
    var selectedRow = document.querySelector(".second-row");
    selectedRow.classList.toggle("table-success");
    selectedRow.classList.toggle(SELECTED_ROW_CLASS_NAME);
    var selectedButton = document.querySelector("#button-2");
    toggleButtonText(selectedButton);
});

document.querySelector("#button-3").addEventListener("click", function(){
    var selectedRow = document.querySelector(".third-row");
    selectedRow.classList.toggle("table-success");
    selectedRow.classList.toggle(SELECTED_ROW_CLASS_NAME);
    var selectedButton = document.querySelector("#button-3");
    toggleButtonText(selectedButton);
});


document.querySelector("#order").addEventListener("click", function(){
    createOrderTable()


});

function toggleButtonText(button){
    if (button.textContent == "Unselect"){
        button.textContent = "Select";
    } else {
        button.textContent = "Unselect";
    }
}

function createOrderTable(){
    var selectedRowsList = document.querySelectorAll("." + SELECTED_ROW_CLASS_NAME);
    if (!selectedRowsList.length == 0){
        var tableBody = document.querySelector(".order-table-body");
        for(var i=0; i<selectedRowsList.length; i++){
            var createdRow = createTableRow(selectedRowsList[i])
            tableBody.appendChild(createdRow);
        }
        document.querySelector(".order-table").classList.remove("not-display-element");
        //הוספת הדיב עם סכום כולל
        document.querySelector(".total-price").textContent+=" "+sum;
        document.querySelector(".total-price").classList.remove("total-price");
    }
}
//
var sum=0;
function createTableRow(selectedRow){
    var selectedCarRow = document.createElement("tr");
    var selectedCarNumber = document.createElement("td");
    var selectedCarName = document.createElement("td");
    var selectedCarPrice = document.createElement("td");

    selectedCarNumber.textContent = selectedRow.querySelector(".car-number").textContent;
    selectedCarName.textContent = selectedRow.querySelector(".car-name").textContent;
    selectedCarPrice.textContent = selectedRow.querySelector(".car-prise").textContent;

    //חישוב סכום כולל
    sum+=Number(selectedRow.querySelector(".car-prise").textContent.replace(/[^0-9]/g, ''));

    selectedCarRow.appendChild(selectedCarNumber);
    selectedCarRow.appendChild(selectedCarName);
    selectedCarRow.appendChild(selectedCarPrice);
    return selectedCarRow;
}