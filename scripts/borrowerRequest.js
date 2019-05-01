import loading from '../scripts/loading.js'

export default function borrowerRequest() {

    fetch("../json/borrower.json").then(function (res) {
        res.json().then(function (res) {
            updateData(res);
        })
    });

    function updateData(resource) {
        document.querySelector(".PassportMain").remove();
        document.querySelector(".Passport-inputCheck").checked = false;

        let buttonContinue = document.querySelector(".Passport-buttonContinue");

        let section = ` <section><h2 class="Passport-header">${resource.rules_credit}</h2>
             <p class="Passport-step">${resource.step}</p>
             <div class="Passport-divBar">
                <hr class="Passport-bar Passport-bar--60"></div>
             <p class="Passport-progress">${resource.progress}
             <strong class="Passport-percent">${resource.percent}</strong></p></section>
        <section class="PassportSectionBorrower">
            <h2 class="PassportSectionBorrower-h2">${resource.choose}</h2>
            <h3 class="PassportSectionBorrower-h3">Заява позичальника № 12345678909877</h3>
            <p class="PassportSectionBorrower-p PassportSectionBorrower-p--Borrowers">${resource.Borrowers_statement}</p>
            <h3 class="PassportSectionBorrower-h3">БАНКІВСЬКІ ПОСЛУГИ Кредит</h3>
            <p class="PassportSectionBorrower-p PassportSectionBorrower-p--banking">${resource.BANKING_SERVICES}</p>
        </section>`;

        document.querySelector(".Passport").insertAdjacentHTML("afterbegin", section);

        window.scrollTo(0, 0);

        buttonContinue.onclick = function () {
            let inputCheck = document.querySelector(".Passport-inputCheck");
            let errorParagraph = document.querySelector(".Passport-errorText");
            if (inputCheck.checked) {
                errorParagraph.textContent = "";

                loading();
            } else {
                errorParagraph.textContent = "Согласитесь с условиями";
            }
        };

    }
}