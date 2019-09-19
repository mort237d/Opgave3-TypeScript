var inputElement = document.getElementById("inputField");
var buttonElement = document.getElementById("button");
var selectElement = document.getElementById("select");
buttonElement.addEventListener("click", convertString);
function convertString() {
    var input = inputElement.value;
    var outputField = document.getElementById("outputField");
    if (selectElement.value === "upper") {
        outputField.innerHTML = input.toUpperCase();
    }
    else if (selectElement.value === "lower") {
        outputField.innerHTML = input.toLowerCase();
    }
}
