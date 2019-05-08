import {Const} from './consts.mjs';

export default function borrowerRequest() {
    fetch(Const.PATH_BORROWER).then((res) => {
        res.json().then((res) => {
            document.querySelector(".Passport").remove();
            let section = `<main class="Passport">
                 <section class="PassportMain">
                <h2 class="Passport-header">${res.rules_credit}</h2>
                 <p class="Passport-step">${res.step}</p>
                 <div class="Passport-divBar">
                    <hr class="Passport-bar Passport-bar--60"></div>
                 <p class="Passport-progress">${res.progress}
                 <strong class="Passport-percent">${res.percent}</strong></p></section>
            <section class="PassportSectionBorrower">
                <h2 class="PassportSectionBorrower-h2">${res.choose}</h2>
                <h3 class="PassportSectionBorrower-h3">Заява позичальника № 12345678909877</h3>
                <p class="PassportSectionBorrower-p PassportSectionBorrower-p--Borrowers">${res.Borrowers_statement}</p>
                <h3 class="PassportSectionBorrower-h3">БАНКІВСЬКІ ПОСЛУГИ Кредит</h3>
                <p class="PassportSectionBorrower-p PassportSectionBorrower-p--banking">${res.BANKING_SERVICES}</p></section>
                <label class="Passport-labelCheck">
                <input class="Passport-inputCheck" type="checkbox">Ознайомився (-лась)  та згоден (-на) </label>
                <p class="Passport-errorText"></p>
                <button class="Passport-buttonContinue buttonType">Продовжити</button></main>`;
            document.querySelector(".Header").insertAdjacentHTML("afterend", section);
            window.scrollTo(0, 0);

            document.querySelector(".Passport-buttonContinue").onclick = () => {
                let errorParagraph = document.querySelector(".Passport-errorText");
                if (document.querySelector(".Passport-inputCheck").checked) {
                    errorParagraph.textContent = "";
                    import('./loading.mjs').then((loading) => loading.default());
                } else
                    errorParagraph.textContent = "Согласитесь с условиями";
            };
        })
    })
};