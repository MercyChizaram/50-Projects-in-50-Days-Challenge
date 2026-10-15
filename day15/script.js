const bmiForm = document.getElementById("bmiForm");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const resultSection = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const bmiMessage = document.getElementById("bmiMessage");
const errorMessage = document.getElementById("errorMessage");


function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    errorMessage.textContent = "";

    // VALIDATE INPUTS

    if (
        !weightInput.value ||
        !heightInput.value ||
        !Number.isFinite(weight) ||
        !Number.isFinite(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        errorMessage.textContent =
            "Please enter valid weight and height values.";
        
        resultSection.hidden = true;
        return;
    }

    const bmi = calculateBMI(weight, height);

    if (Number.isFinite(bmi)) {
        errorMessage.textContent =
            "Unable to calculate BMI. Check your inputs";
        
        resultSection.hidden = true;
        return;
    }

    const category = getBMICategory(bmi);

    bmiValue.textContent = bmi.toFixed(1);
})