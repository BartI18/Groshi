import borrower from './borrowerRequest.mjs';

export default function rules() {

    fetch("../json/rules.json").then(function (ful) {
        ful.json().then((resp) => appendData(resp));
    });

    function appendData(responseJSON) {
        repaint(responseJSON);

        let buttonContinue = document.querySelector(".Passport-buttonContinue");
        let buttonHideAll = document.querySelector(".Passport-buttonHideAll");

        document.querySelector(".Passport-button--credit").onclick = () => onClick(".PassportProcedure");
        document.querySelector(".Passport-button--information").onclick = () => onClick(".PassportInfo");

        buttonHideAll.onclick = () => {
            let divPassword = document.querySelector(".PassportDiv");
            if (!divPassword.style.display) {
                divPassword.style.display = 'none';
                buttonHideAll.textContent = "Раскрыть всё";
            } else {
                divPassword.style.display = '';
                buttonHideAll.textContent = "Свернуть всё";
            }
        };

        buttonContinue.onclick = () => {
            let inputCheck = document.querySelector(".Passport-inputCheck");
            let errorParagraph = document.querySelector(".Passport-errorText");
            if (inputCheck.checked) {
                errorParagraph.textContent = "";
                borrower();
            } else errorParagraph.textContent = "Согласитесь с условиями";
        };
    }

    function onClick(name) {
        let div = document.querySelector(name);
        if (div.style.display)
            div.style.display = '';
        else
            div.style.display = 'none';
    }

    /**
     * The function removes and inserts elements into the DOM
     * @param responseJSON json text from server
     */
    function repaint(responseJSON) {
        document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="../css/index/mobile_rules.css">`);
        document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" 
            media="screen and (max-width: 1920px) and (min-width: 426px)" href="../css/index/desktop_rules.css">`);

        document.querySelector(".SFirstContainer").remove();
        document.querySelector(".Main").remove();

        let main = `<main class="Passport">
                <section class="PassportMain">
                <h2 class="Passport-header">${responseJSON.main_info.header}</h2>
                    <p class="Passport-step">${responseJSON.main_info.step}</p>
                <div class="Passport-divBar">
                    <hr class="Passport-bar Passport-bar--40"></div>
                    <p class="Passport-progress">${responseJSON.main_info.progress}
                    <strong class="Passport-percent">${responseJSON.main_info.percent}</strong></p>
                <dl class="PassportDl">
                        <dt class="PassportDl-dt PassportDl-dt--passport">${responseJSON.dl.passport}</dt>
                        <dd class="PassportDl-dd">${responseJSON.dl.information_about}</dd>
                        <dt class="PassportDl-dt PassportDl-dt-padding">${responseJSON.dl.agreement}</dt>
                        <dd class="PassportDl-dd PassportDl-dd--information">${responseJSON.dl.information_client}</dd>
                    </dl></section>
                    <iframe class="PassportIframe" src=${responseJSON.main_info.hrefPDF}></iframe>
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
                        <button class="Passport-buttonContinue buttonType">Продовжити</button>
             </main>`;

        document.querySelector(".Header").insertAdjacentHTML("afterend", main);
        window.scrollTo(0, 0);
    }

}