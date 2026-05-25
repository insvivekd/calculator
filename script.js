let input = document.getElementById("display");


document.querySelectorAll("button").forEach(e => {
    e.addEventListener("click", () => {
        let value = e.textContent;

        if (input.value == "0") {
            input.value = value;
        }

        else if (value == "÷" || value == "×") {
            if (value == "÷") {
                input.value += "/";
            }

            else {
                input.value += "*";
            }
        }

        else if (value == "AC") {
            input.value = "0";
        }

        else if (value == "⌫") {
            input.value = input.value.slice(0, -1) || "0";
        }

        else if (value == "%") {

        }

        else if (value == "=") {
            input.value = eval(input.value);
        }

        else {
            input.value += value;
        }
    });
});