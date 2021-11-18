let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");
let displayValue = "";

for (const button of buttons) {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == "x") {
            buttonText = "*";
            displayValue += buttonText
        }
        else if (buttonText == "C") {
            displayValue = "";
        }
        else if (buttonText == "=") {
            displayValue = eval(display.value);
        }
        else if (buttonText == "<") {
            displayValue = display.value.substring(0, display.value.length-1);
        }
        else {
            displayValue += buttonText;
        }
        display.value = displayValue;
    })
}