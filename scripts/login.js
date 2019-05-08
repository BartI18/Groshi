import rules from './rules.mjs';
import {Const} from './consts.mjs';

let paragraphError = document.querySelector(".SFirst-paragraphError");
let inputAmount = document.querySelector(".SFirst-inputCount");
let label24 = document.querySelector("#SFirst-labelMonth24");
let label12 = document.querySelector("#SFirst-labelMonth12");
let submitBtn = document.querySelector(".SFirst-inputSubmit");
let inputTel = document.querySelector(".SFirst-inputTelNumber");
let isValidAmount = false;

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

function getTelValue(value) {
    let temp = value;
    temp = temp.slice(1);
    temp = temp.split(" ");
    return temp.join("");
}

function checked24Btn() {
    if (!label24.classList.contains("SFirst-labelMonth--active")) {
        label24.classList.add("SFirst-labelMonth--active");
        label12.classList.remove("SFirst-labelMonth--active");
    }
}

eventL();
checked24Btn();

inputAmount.onkeypress = (e) => {
    if (!inputAmount.value && !(+e.key) || +e.key > 9 || +e.key < 0 || Number.isNaN(+e.key))
        e.preventDefault();
};

inputAmount.onkeyup = eventL;

inputTel.onkeypress = (e) => {
    if (!inputTel.value)
        inputTel.value = "+";
    if (Number.isNaN(+e.key) || +e.key > 9 || +e.key < 0)
        e.preventDefault();
};

inputTel.onkeyup = (e) => {
    let tempValue = getTelValue(inputTel.value);
    tempValue = tempValue.split('');
    if (tempValue.length >= 6)
        tempValue.splice(5, 0, " ");
    inputTel.value = "+" + tempValue.join("");
    (+inputTel.value.length !== Const.LENGTH_PHONE_NUMBER) ?
        submitBtn.setAttribute("disabled", "true") : submitBtn.removeAttribute("disabled");
};


submitBtn.onclick = (e) => {
    if (submitBtn.textContent !== "ПРОДОВЖИТИ") {
        if (isValidNumber(getTelValue(inputTel.value)) && isValidAmount) {
            let numberValue = `${inputTel.value.slice(0, 5)} XXXXXX ${inputTel.value.slice(10)}`;
            document.querySelector(".SFirst-labelTelNumber").innerHTML =
                `<input class="SFirst-inputPassword SFirst-inputTelNumber" maxlength=\"6\" placeholder=\"SMS пароль\">`;
            document.querySelector(".SFirst-parOTPPassword").innerHTML =
                `На номер <mark class="SFirst-passMark">${numberValue}</mark> був вiдправленний SMS-пароль`;
            submitBtn.textContent = "ПРОДОВЖИТИ";
            submitBtn.removeAttribute("disabled");
        }
    } else {
        if (document.querySelector(".SFirst-inputPassword").value.length !== Const.LENGTH_PASS)
            setTextColorMsg('Неверная длинна пароля', '#f00');
        else
            rules();
    }
    e.preventDefault();
};

document.querySelector(".SFirst-inputMonth12").onchange = () => {
    if (!label12.classList.contains("SFirst-labelMonth--active")) {
        label12.classList.add("SFirst-labelMonth--active");
        label24.classList.remove("SFirst-labelMonth--active");
    }
};
document.querySelector(".SFirst-inputMonth24").onchange = checked24Btn;

function checkAmount(currentValue) {
    if (currentValue >= Const.MINIMAL_VALUE && currentValue <= Const.MAX_VALUE) {
        paragraphError.innerHTML = null;
        document.querySelector("#SFirst-amountMoney24").textContent = `${(currentValue * Const.KOEF_24 / Const.MONTHS_24).toFixed(2)} грн`;
        document.querySelector("#SFirst-amountMoney12").textContent = `${(currentValue * Const.KOEF_12 / Const.MONTHS_12).toFixed(2)} грн`;
        submitBtn.removeAttribute("disabled");
        isValidAmount = true;
    } else {
        submitBtn.setAttribute("disabled", "true");
        isValidAmount = false;
        if (currentValue < Const.MINIMAL_VALUE)
            paragraphError.textContent = "Сума мінімального кредиту становить 1000 грн";
        if (currentValue > Const.MAX_VALUE)
            paragraphError.textContent = "Сума максимального кредиту становить 50000 грн";
    }
}

function setTextColorMsg(text, color) {
    let infoText = document.querySelector(".SFirst-parOTPPassword");
    infoText.textContent = text;
    infoText.style.color = color;
}

/**
 * set Attribute from number
 * @param phoneNumber
 * @returns <b>true</b> if valid  <b>false</b> if not valid
 */
function isValidNumber(phoneNumber) {
    let isValid = !(phoneNumber.length < 12 || phoneNumber.slice(0, 3) !== "380" || Number.isNaN(phoneNumber));
    (isValid) ? submitBtn.setAttribute("disabled", "true") : submitBtn.removeAttribute("disabled");

    (isValid) ? setTextColorMsg("На цей номер буде вiдправленний OTP-пароль", "#000") :
        setTextColorMsg("Невірний формат номера", "#f00");
    return isValid;
}


