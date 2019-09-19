let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
let selectElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("select");
buttonElement.addEventListener("click", convertString);

function convertString(): void {
    let input: string = inputElement.value;
    let outputField: HTMLDivElement = <HTMLDivElement>document.getElementById("outputField");

    if (selectElement.value === "upper") {
        outputField.innerHTML = input.toUpperCase();
    }
    else if (selectElement.value === "lower") {
        outputField.innerHTML = input.toLowerCase();
    }
}