import Rules from './rules.js';

(function main() {

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
    let submitBtnContinue = document.querySelector(".SFirst-buttonContinue");
    let inputTel = document.querySelector(".SFirst-inputTelNumber");
    let labelTel = document.querySelector(".SFirst-labelTelNumber");
    let paragraphPassword = document.querySelector(".SFirst-parOTPPassword");
    let check24 = document.querySelector(".SFirst-inputMonth24");
    let check12 = document.querySelector(".SFirst-inputMonth12");

    submitBtn.disabled = true;

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
        inputAmount.addEventListener("keypress", function (e) {
            if (inputAmount.value.toString().length === 0 && e.keyCode === 48)
                e.preventDefault();
            if (e.keyCode > 57 || e.keyCode < 48)
                e.preventDefault();
            // console.log("press");
        });

        inputAmount.addEventListener("keyup", eventL);

        inputTel.addEventListener("keypress", function (e) {
            if (inputTel.value === "")
                inputTel.value = "+";

            if (e.keyCode > 57 || e.keyCode < 48)
                e.preventDefault();
        });

        inputTel.addEventListener("keyup", function (e) {
            let temp = inputTel.value;
            temp = temp.slice(1);
            temp = temp.split(" ");
            temp = temp.join("");
            let tempValue = temp;
            tempValue = tempValue.split('');
            if (tempValue.length >= 6)
                tempValue.splice(5, 0, " ");
            inputTel.value = "+" + tempValue.join("");
            submitBtn.disabled = inputTel.value < 14;
        });

        submitBtn.addEventListener("click", function (e) {
            if (submitBtn.textContent !== "ПРОДОВЖИТИ") {
                let temp = inputTel.value;
                temp = temp.slice(1);
                temp = temp.split(" ");
                temp = temp.join("");
                if (checkNumber(temp)) {
                    let numberValue = inputTel.value.slice(0, 5) + "XXXXXX" + inputTel.value.slice(10);
                    labelTel.innerHTML = `<input class="SFirst-inputPassword SFirst-inputTelNumber" maxlength=\"6\" placeholder=\"SMS пароль\">`;
                    paragraphPassword.innerHTML = `На номер <mark class="SFirst-passMark">${numberValue}</mark> був вiдправленний SMS-пароль`;
                    submitBtn.textContent = "ПРОДОВЖИТИ";
                    submitBtn.disabled = false;
                }
            } else {
                new Rules();
            }

            e.preventDefault();
        });

        check12.onchange = function (e) {
            label12.className = "SFirst-labelMonth SFirst-labelMonth--active SFirst-labelMonth--12";
            label24.className = "SFirst-labelMonth";
        };

        check24.onchange = function (e) {
            label24.className = "SFirst-labelMonth SFirst-labelMonth--active";
            label12.className = "SFirst-labelMonth SFirst-labelMonth--12";
        };
    }

    function checkAmount(currentValue) {
        if (currentValue >= MINIMAL_VALUE && currentValue <= MAX_VALUE) {
            paragraphError.innerHTML = null;
            span24.textContent = (currentValue * KOEF_24 / 24).toFixed(2) + " грн";
            span12.textContent = (currentValue * KOEF_12 / 12).toFixed(2) + " грн";
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
            if (currentValue < MINIMAL_VALUE)
                paragraphError.innerHTML = "Сума мінімального кредиту становить 1000 грн";
            if (currentValue > MAX_VALUE)
                paragraphError.innerHTML = "Сума максимального кредиту становить 50000 грн";
        }
    }

    function checkNumber(phoneNumber) {
        let infoText = document.querySelector(".SFirst-parOTPPassword");
        let isValid = checkErrorNumber(phoneNumber);
        submitBtn.disabled = isValid;
        if (isValid) {
            infoText.textContent = "На цей номер буде вiдправленний OTP-пароль";
            infoText.style.color = "#000";
        } else {
            infoText.textContent = "Невірний формат номера";
            infoText.style.color = "#f00";
        }

        return isValid;
    }

    function checkErrorNumber(value) {
        if (value.length < 12)
            return false;
        if (value.slice(0, 3) !== "380")
            return false;
        if (Number.isNaN(value))
            return false;
        return true;
    }
}());

