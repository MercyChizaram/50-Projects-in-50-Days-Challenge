const btn = document.querySelectorAll(".btn");
const button = document.querySelectorAll(".btn-operator");
const display = document.querySelector(".display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

btn.forEach(function (button) {
    button.addEventListener("click", function () {

        const value = button.textContent;

        if (value === "c") {
            display.textContent = "0";
            return;
        }

        if (value === ".") {
            if (!display.textContent.includes(".")) {
                display.textContent += ".";
            }
            return;
        }

        if (display.textContent === "0") {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    });
});

button.forEach(function (button) {
    button.addEventListener("click", function () {

        const value = button.textContent;

        if (value === "AC") {
            firstNumber = "";
            operator = "";
            secondNumber = "";
            display.textContent = "0";
            return;
        }

        if (value === "x") {

            if (display.textContent.length > 1) {
                display.textContent =
                    display.textContent.slice(0, -1);
            } else {
                display.textContent = "0";
            }

            return;
        }

        if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/" ||
            value === "%"
        ) {

            firstNumber = display.textContent;
            operator = value;

            display.textContent = "0";

            return;
        }

        if (value === "=") {

            secondNumber = display.textContent;

            const first = Number(firstNumber);
            const second = Number(secondNumber);

            let result;


            if (operator === "+") {
                result = first + second;

            } else if (operator === "-") {
                result = first - second;

            } else if (operator === "*") {
                result = first * second;

            } else if (operator === "/") {

                if (second === 0) {
                    display.textContent = "Error";
                    return;
                }

                result = first / second;

            } else if (operator === "%") {
                result = first % second;
            }


            display.textContent = result;

            firstNumber = result;
            operator = "";
            secondNumber = "";
        }
    });
});