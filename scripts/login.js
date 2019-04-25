import Rules from './rules.js';

const MINIMAL_VALUE = 1000;
const MAX_VALUE = 50000;
const KOEF_12 = 1.6226;
const KOEF_24 = 2.199;

let paragraphError = document.querySelector(".SFirst-paragraphError");
let inputAmount = document.querySelector(".SFirst-inputCount");
let label24 = document.querySelector("#SFirst-amountMoney24");
let label12 = document.querySelector("#SFirst-amountMoney12");
let submitBtn = document.querySelector(".SFirst-inputSubmit");
let submitBtnContinue = document.querySelector(".SFirst-buttonContinue");
let inputTel = document.querySelector(".SFirst-inputTelNumber");
let labelTel = document.querySelector(".SFirst-labelTelNumber");
let paragraphPassword = document.querySelector(".SFirst-parOTPPassword");

submitBtn.disabled = true;

inputAmount.addEventListener("keypress", function (e) {
    if (e.keyCode > 57 || e.keyCode < 48)
        e.preventDefault();
});

inputAmount.addEventListener("keyup", function (event) {
    let temp = inputAmount.value;
    temp = temp.split(" ");
    temp = temp.join("");
    checkAmount(parseInt(inputAmount.value));

    let tempValue = temp;
    if (tempValue > 0)
        if (Math.trunc(tempValue / 1000)) {
            let integral = Math.trunc(tempValue / 1000);
            console.log("Temp value: "+ tempValue);
            tempValue = integral + " " + tempValue%1000;
        }else tempValue = tempValue % 1000;

    inputAmount.value = tempValue;
});

inputTel.addEventListener("keypress", function (e) {
    if (inputTel.value === "")
        inputTel.value = "+";

    if (e.keyCode > 57 || e.keyCode < 48)
        e.preventDefault();
});

inputTel.addEventListener("keyup", function (e) {
    submitBtn.disabled = inputTel.value.length < 13;
});

submitBtn.addEventListener("click", function (e) {
    if (submitBtn.innerHTML !== "ПРОДОВЖИТИ") {
        let numberValue = inputTel.value.slice(0, 5) + "XXXXXX" + inputTel.value.slice(10);
        labelTel.innerHTML = `<input class="SFirst-inputPassword SFirst-inputTelNumber" maxlength=\"6\" placeholder=\"SMS пароль\">`;
        paragraphPassword.innerHTML = `На номер <mark class="SFirst-passMark">${numberValue}</mark> був вiдправленний SMS-пароль`;
        submitBtn.innerHTML = "ПРОДОВЖИТИ";
    } else {
        new Rules();
    }
    e.preventDefault();
});

function checkAmount(currentValue) {
    if (currentValue >= MINIMAL_VALUE && currentValue <= MAX_VALUE) {
        paragraphError.innerHTML = null;
        label24.textContent = (currentValue * KOEF_24 / 24).toFixed(2) + " грн";
        label12.textContent = (currentValue * KOEF_12 / 12).toFixed(2) + " грн";
        console.log(label24.textContent);
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
        if (currentValue < MINIMAL_VALUE)
            paragraphError.innerHTML = "Сума мінімального кредиту становить 1000 грн";
        if (currentValue > MAX_VALUE)
            paragraphError.innerHTML = "Сума максимального кредиту становить 50000 грн";
    }
}