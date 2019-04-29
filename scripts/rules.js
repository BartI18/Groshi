import Borrower from './borrowerRequest.js';

export default function Rules() {

    fetch("../json/rules.json").then(function (ful) {
        ful.json().then(function (resp) {
            appendData(resp);
        })
    });

    function appendData (responseJSON) {
        repaint(responseJSON);

        let buttonContinue = document.querySelector(".Passport-buttonContinue");
        let buttonHideAll = document.querySelector(".Passport-buttonHideAll");
        let buttonProcedure = document.querySelector(".Passport-button--credit");
        let buttonInformation = document.querySelector(".Passport-button--information");

        buttonHideAll.addEventListener("click", function () {
            let divPassword = document.querySelector(".PassportDiv");
            if (divPassword.style.display === '') {
                divPassword.style.display = 'none';
                buttonHideAll.innerHTML = "Раскрыть всё";
            } else {
                divPassword.style.display = '';
                buttonHideAll.innerHTML = "Свернуть всё";
            }
        });

        buttonContinue.onclick = function () {
            let inputCheck = document.querySelector(".Passport-inputCheck");
            let errorParagraph = document.querySelector(".Passport-errorText");
            if (inputCheck.checked) {
                errorParagraph.innerHTML = "";

                new Borrower();
            } else {
                errorParagraph.innerHTML = "Согласитесь с условиями";
            }
        };

        buttonProcedure.onclick = function () {
            let div = document.querySelector(".PassportProcedure");
            if (div.style.display === '')
                div.style.display = 'none';
            else
                div.style.display = '';
        };
        buttonInformation.onclick = function () {
            let div = document.querySelector(".PassportInfo");
            if (div.style.display === '')
                div.style.display = 'none';
            else
                div.style.display = '';
        };
    }

    /**
     * The function removes and inserts elements into the DOM
     * @param responseJSON json text from server
     */
    function repaint(responseJSON) {
        let style_mobile = document.createElement("link");
        let style_desktop = document.createElement("link");
        let main = document.createElement("main");

        style_mobile.rel = "stylesheet";
        style_mobile.href = "../css/index/mobile_rules.css";

        style_desktop.rel = "stylesheet";
        style_desktop.media = "screen and (max-width: 1024px) and (min-width: 426px)";
        style_desktop.href = "../css/index/mobile_rules.css";
        document.head.appendChild(style_desktop);
        document.head.appendChild(style_mobile);
        document.querySelector(".SFirstContainer").remove();
        document.querySelector(".Main").remove();

        main.classList = "Passport";
        main.innerHTML =
            `<section><h2 class="Passport-header">${responseJSON.main_info.header}</h2>
             <p class="Passport-step">${responseJSON.main_info.step}</p>
             <div class="Passport-divBar">
                <hr class="Passport-bar"></div>
             <p class="Passport-progress">${responseJSON.main_info.progress}
             <strong class="Passport-percent">${responseJSON.main_info.percent}</strong></p></section>
             <dl class="PassportDl">
                    <dt class="PassportDl-dt PassportDl-dt--passport">${responseJSON.dl.passport}</dt>
                    <dd class="PassportDl-dd">${responseJSON.dl.information_about}</dd>
                    <dt class="PassportDl-dt PassportDl-dt-padding">${responseJSON.dl.agreement}</dt>
                    <dd class="PassportDl-dd PassportDl-dd--information">${responseJSON.dl.information_client}</dd>
                </dl>
                <div class="PassportDiv">
                    <button class="Passport-button Passport-button--data">${responseJSON.main_info.description}</button>
                    <button class="Passport-button Passport-button--back">${responseJSON.main_info.back_credit}</button>
                    <section class="PassportSectionFirst">
                        <p class="PassportSectionFirst-paragraph">${responseJSON.main_info.amount_size}</p>
                        <p class="PassportSectionFirst-paragraph">${responseJSON.main_info.graphic_payment}</p>
                </section>
                <button class="Passport-button Passport-button--information">${responseJSON.main_info.additionally_info}</button>
                <div class="PassportInfo">
                    <section class="PassportSection PassportSection--grey">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.additionally_service}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.missing}</p>
                    </section>
                    <section class="PassportSection PassportSection--white">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.notary_s_services}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.missing}</p>
                    </section>
                    <section class="PassportSection PassportSection--grey">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.appraiser_services}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.missing}</p>
                    </section>
                    <section class="PassportSection PassportSection--white">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.insurer_s_services}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.missing}</p>
                    </section>
                    <section class="PassportSection PassportSection--grey">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.general_expenses}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.untimely_repayment}</p>
                    </section>
                    <section class="PassportSection PassportSection--white">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.fine}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.fine_info}</p>
                    </section>
                    <section class="PassportSection PassportSection--grey">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.additionally_service_2}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.missing}</p>
                    </section>
                    <section class="PassportSection PassportSection--white">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.interest_rate}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.missing}</p>
                    </section>
                    <section class="PassportSection PassportSection--grey">
                        <h4 class="PassportSection-h4">${responseJSON.main_info.other_payments}</h4>
                        <p class="PassportSection-p">${responseJSON.main_info.missing}</p>
                    </section></div>
                <button class="Passport-button Passport-button--credit">${responseJSON.main_info.procedure}</button>
                <div class="PassportProcedure">
                    <p class="Passport-paragr Passport-paragr--grey">
                        <strong class="Passport-consumer">${responseJSON.main_info.consumer}</strong>
                         ${responseJSON.main_info.free_get}</p>
                    <p class="Passport-paragr Passport-paragr--white">
                        <strong class="Passport-consumer">${responseJSON.main_info.consumer}</strong>${responseJSON.main_info.cancel}</p>
                    <p class="Passport-paragr Passport-paragr--white">Так</p>
                    <p class="Passport-paragr Passport-paragr--grey">
                        <strong class="Passport-consumer">${responseJSON.main_info.consumer}</strong>достроково повернути споживчий кредит без будь-якої додаткової плати, пов’язаної з
                        достроковим поверненням. Договором про споживчий кредит може бути встановлений обов’язок повідомлення кредитодавця про намір дострокового повернення
                        споживчого кредиту з оформленням відповідного документа.</p>
                    <p class="Passport-paragr Passport-paragr--white">Умови договору про споживчий  кредит можуть відрізнятися від інформації, наведеної в цьому Паспорті
                        споживчого кредиту, та будуть залежати від проведеної кредитодавцем оцінки кредитоспроможності споживача з урахуванням, зокрема, наданої ним інформації
                        про майновий та сімейний стан, розмір доходів тощо.</p></div></div>
                <button class="Passport-buttonHideAll">Свернуть все</button>
                <label class="Passport-labelCheck">
                    <input class="Passport-inputCheck" type="checkbox">Ознайомився (-лась)  та згоден (-на) </label>
                <p class="Passport-errorText"></p>
                <button class="Passport-buttonContinue buttonType">Продовжити</button>`;

        document.body.insertBefore(main,document.body.children[1]);
        window.scrollTo(0,0);
    }

}