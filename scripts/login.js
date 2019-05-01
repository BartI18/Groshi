import rules from './rules.js';

const MINIMAL_VALUE = 1000;
const MAX_VALUE = 50000;
const KOEF_12 = 1.6226;
const KOEF_24 = 2.199;

let paragraphError = document.querySelector(".SFirst-paragraphError");
let inputAmount = document.querySelector(".SFirst-inputCount");
let span24 = document.querySelector("#SFirst-amountMoney24");
let span12 = document.querySelector("#SFirst-amountMoney12");
let label24 = document.querySelector("#SFirst-labelMonth24");
let label12 = document.querySelector("#SFirst-labelMonth12");
let submitBtn = document.querySelector(".SFirst-inputSubmit");
let inputTel = document.querySelector(".SFirst-inputTelNumber");
let labelTel = document.querySelector(".SFirst-labelTelNumber");
let paragraphPassword = document.querySelector(".SFirst-parOTPPassword");
let check24 = document.querySelector(".SFirst-inputMonth24");
let check12 = document.querySelector(".SFirst-inputMonth12");

submitBtn.setAttribute("disabled", "true");

function eventL() {
    let temp = inputAmount.value;
    temp = temp.split(" ");
    temp = temp.join("");
    checkAmount(parseInt(temp));
    let tempValue = temp;
    tempValue = tempValue.split('');
    if (tempValue.length === 4)
        tempValue.splice(1, 0, " ");
    else if (tempValue.length === 5)
        tempValue.splice(2, 0, " ");
    inputAmount.value = tempValue.join("");
}

setEvent();
eventL();

function setEvent() {
    inputAmount.onkeypress = (e) => {
        if (!inputAmount.value && !(+e.key) || +e.key > 9 || +e.key < 0 || Number.isNaN(+e.key))
            e.preventDefault();
    };

    inputAmount.onkeyup = () => eventL();

    inputTel.onkeypress =  (e) => {
        if (!inputTel.value)
            inputTel.value = "+";
        if (Number.isNaN(+e.key) || +e.key > 9 || +e.key < 0)
            e.preventDefault();
    };

    inputTel.onkeyup = function (e) {
        let tempValue = getTelValue(inputTel.value);
        tempValue = tempValue.split('');
        if (tempValue.length >= 6)
            tempValue.splice(5, 0, " ");
        inputTel.value = "+" + tempValue.join("");
        (+inputTel.value.length !== 14) ?
            submitBtn.setAttribute("disabled", `true`) : submitBtn.removeAttribute("disabled");
    };

    submitBtn.onclick = (e) => {
        if (submitBtn.textContent !== "ПРОДОВЖИТИ") {
            if (setAttributeText(getTelValue(inputTel.value))) {
                let numberValue = `${inputTel.value.slice(0, 5)} XXXXXX ${inputTel.value.slice(10)}`;
                labelTel.innerHTML = `<input class="SFirst-inputPassword SFirst-inputTelNumber" maxlength=\"6\" placeholder=\"SMS пароль\">`;
                paragraphPassword.innerHTML = `На номер <mark class="SFirst-passMark">${numberValue}</mark> був вiдправленний SMS-пароль`;
                submitBtn.textContent = "ПРОДОВЖИТИ";
                submitBtn.removeAttribute("disabled");
            }
        } else {
            rules();
        }

        e.preventDefault();
    };

    function getTelValue(value) {
        let temp = value;
        temp = temp.slice(1);
        temp = temp.split(" ");
        return temp.join("");
    }

    check12.onchange = () => {
        if (!label12.classList.contains("SFirst-labelMonth--active")) {
            label12.classList.add("SFirst-labelMonth--active");
            label24.classList.remove("SFirst-labelMonth--active");
        }
    };

    check24.onchange = () => {
        if (!label24.classList.contains("SFirst-labelMonth--active")) {
            label24.classList.add("SFirst-labelMonth--active");
            label12.classList.remove("SFirst-labelMonth--active");
        }
    };
}

function checkAmount(currentValue) {
    if (currentValue >= MINIMAL_VALUE && currentValue <= MAX_VALUE) {
        paragraphError.innerHTML = null;
        span24.textContent = `${(currentValue * KOEF_24 / 24).toFixed(2)} грн`;
        span12.textContent = `${(currentValue * KOEF_12 / 12).toFixed(2)} грн`;
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "true");
        if (currentValue < MINIMAL_VALUE)
            paragraphError.textContent = "Сума мінімального кредиту становить 1000 грн";
        if (currentValue > MAX_VALUE)
            paragraphError.textContent = "Сума максимального кредиту становить 50000 грн";
    }
}

/**
 * set Attribute from number
 * @param phoneNumber
 * @returns <b>true</b> if valid  <b>false</b> if not valid
 */
function setAttributeText(phoneNumber) {
    let isValid = !(phoneNumber.length < 12 || phoneNumber.slice(0, 3) !== "380" || Number.isNaN(phoneNumber));
    (isValid) ? submitBtn.setAttribute("disabled", "true") : submitBtn.removeAttribute("disabled");

    (isValid) ? setValue("На цей номер буде вiдправленний OTP-пароль", "#000") : setValue("Невірний формат номера", "#f00");

    function setValue(text, color) {
        let infoText = document.querySelector(".SFirst-parOTPPassword");
        infoText.textContent = text;
        infoText.style.color = color;
    }

    return isValid;
}
