document.addEventListener("DOMContentLoaded", () => {
    let selectedValues = { X: null, Y: null, Z: null };

function selectValue(variable, value) {
    selectedValues[variable] = value;
    document.getElementById(`selected${variable}`).innerText = `Selected ${variable}`;
}

function resetValues() {
    selectedValues = { X: null, Y: null, Z: null};
    console.log("Values reset");
    document.getElementById("result").innerText = " ";
    document.getElementById("selectedX").innerText = " ";
    document.getElementById("selectedY").innerText = " ";
    document.getElementById("selectedZ").innerText = " ";
}

function calculate() {
    const { X, Y, Z} = selectedValues;

    if (X !== null && Y !== null && Z !== null) {
        const result1 = 2 * X + 11;
        const result2 = (2 * Z + Y) - 5;
        const result3 = Math.abs((Y + Z) - X);

        document.getElementById("result").innerText = `Code:
        1. ${result1}
        2. ${result2}
        3. ${result3} `;
    } else {
        document.getElementById("result").innerText = "Please select values for X, Y and Z.";
    }
}



window.selectValue = selectValue;
window.resetValues = resetValues;
window.calculate = calculate;
});