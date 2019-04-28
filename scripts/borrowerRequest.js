import Loading from '../scripts/loading.js'

export default function borrowerRequest (){

    fetch("../json/borrower.json").then(function (res) {
        res.json().then(function (res) {
            updateData(res);
        })
    });

    function updateData(resource) {
        document.querySelector(".PassportDl").remove();
        document.querySelector(".PassportDiv").remove();
        document.querySelector(".Passport-buttonHideAll").remove();
        document.querySelector(".Passport-inputCheck").checked = false;

        let section = document.createElement("section");
        let buttonContinue = document.querySelector(".Passport-buttonContinue");

        section.className = "PassportSectionBorrower";
        section.innerHTML = `
        <h2 class="PassportSectionBorrower-h2">${resource.choose}</h2>
        <h3 class="PassportSectionBorrower-h3">Заява позичальника № 12345678909877</h3>
        <p class="PassportSectionBorrower-p PassportSectionBorrower-p--Borrowers">${resource.Borrowers_statement}</p>
        <h3 class="PassportSectionBorrower-h3">БАНКІВСЬКІ ПОСЛУГИ Кредит</h3>
        <p class="PassportSectionBorrower-p PassportSectionBorrower-p--banking">${resource.BANKING_SERVICES}</p>`;

        document.querySelector(".Passport").insertBefore(section,document.querySelector(".Passport").children[1]);
        document.querySelector(".Passport-header").textContent = resource.rules_credit;
        document.querySelector(".Passport-step").textContent = resource.step;
        document.querySelector(".Passport-percent").textContent = resource.percent;
        document.querySelector(".Passport-bar").style.width = "60%";
        window.scrollTo(0,0);

        buttonContinue.onclick = function () {
            let inputCheck = document.querySelector(".Passport-inputCheck");
            let errorParagraph = document.querySelector(".Passport-errorText");
            if (inputCheck.checked) {
                errorParagraph.textContent = "";

                new Loading();
            } else {
                errorParagraph.textContent = "Согласитесь с условиями";
            }
        };

    }
}