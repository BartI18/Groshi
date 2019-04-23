'use strict';

import Borrower from './borrowerRequest.js';

export default class Rules {
    constructor() {};
    rulesHTML = `<main class="Passport">
        <dl class="PassportDl">
        <dt class="PassportDl-dt">Паспорт споживчого кредиту</dt>
        <dd class="PassportDl-dd">Інформація, яка надається споживачу до укладення договору про споживчий кредит</dd>
        <dt class="PassportDl-dt PassportDl-dt-padding">Загальні умови надання кредиту «Швидкий кредит» ПАТ КБ «ПРИВАТБАНК»</dt>
        <dd class="PassportDl-dd">Клієнт: Крічевська Богдана Леонідівна, реєстраційний номер облікової картки платника податків 3214567899.</dd>
    </dl>
        <div class="PassportDiv">
        <button class="Passport-button Passport-button--data">Описание и данные</button>
        <button class="Passport-button Passport-button--back">Порядок повернення кредиту</button>
        <section class="PassportSectionFirst">
            <p class="PassportSectionFirst-paragraph">Кількість та розмір платежів, періодичність внесення</p>
            <p class="PassportSectionFirst-paragraph">Згідно графіку платежів</p>
        </section>
        <button class="Passport-button Passport-button--information">Додаткова інформація*</button>
        <section class="PassportSection PassportSection--grey">
            <h4 class="PassportSection-h4">Додаткові та супутні послуги третіх осіб, обов’язкові для отримання кредиту:</h4>
            <p class="PassportSection-p">Відсутній</p>
        </section>
        <section class="PassportSection PassportSection--white">
            <h4 class="PassportSection-h4">Послуги нотаріуса</h4>
            <p class="PassportSection-p">Відсутній</p>
        </section>
        <section class="PassportSection PassportSection--grey">
            <h4 class="PassportSection-h4">Послуги оцінювача</h4>
            <p class="PassportSection-p">Відсутній</p>
        </section>
        <section class="PassportSection PassportSection--white">
            <h4 class="PassportSection-h4">Послуги страховика</h4>
            <p class="PassportSection-p">Відсутній</p>
        </section>
        <section class="PassportSection PassportSection--grey">
            <h4 class="PassportSection-h4">Загальні витрати за кредитом, грн.</h4>
            <p class="PassportSection-p">У разі несвоєчасного погашення заборгованості за Кредитом Клієнт сплачує
                Банку пеню в розмірі 0,065% від суми простроченої заборгованості за
                Кредитом за кожний день прострочення, але не менше 1 (однієї) гривні;
                У разі затримання споживачем сплати частини споживчого кредиту та/або
                процентів щонайменше на один календарний місяць, Банк має право вимагати
                повернення споживчого кредиту, строк виплати якого ще не настав, в повному
                обсязі.</p>
        </section>
        <section class="PassportSection PassportSection--white">
            <h4 class="PassportSection-h4">Пеня</h4>
            <p class="PassportSection-p">0,065% від суми простроченої заборгованості за Кредитом за кожний день
                прострочення, але не менше 1 (однієї) гривні.</p>
        </section>
        <section class="PassportSection PassportSection--grey">
            <h4 class="PassportSection-h4">Додаткові та супутні послуги третіх осіб, обов’язкові для отримання кредиту:</h4>
            <p class="PassportSection-p">Відсутній</p>
        </section>
        <section class="PassportSection PassportSection--white">
            <h4 class="PassportSection-h4">Процентна ставка, яка застосовується при невиконанні зобов’язання щодо
                повернення кредиту</h4>
            <p class="PassportSection-p">Відсутній</p>
        </section>
        <section class="PassportSection PassportSection--grey">
            <h4 class="PassportSection-h4">Iнші платежі</h4>
            <p class="PassportSection-p">Відсутній</p>
        </section>
        <button class="Passport-button Passport-button--credit">Порядок повернення кредиту</button>
        <p class="Passport-paragr Passport-paragr--grey">
            <mark class="Passport-mark">Споживач має право:</mark> безкоштовно отримати копію проекту договору про споживчий
            кредит у письмовій чи електронній формі за своїм вибором. Це положення не
            застосовується у разі відмови кредитодавця від продовження процесу укладання
            договору зі споживачем.</p>
        <p class="Passport-paragr Passport-paragr--white">
            <mark class="Passport-mark">Споживач має право:</mark> відмовитися від договору про споживчий кредит протягом
            14 календарних днів у порядку та на умовах, визначених Законом України
            &quot;Про споживче кредитування&quot;.</p>
        <p class="Passport-paragr Passport-paragr--white">Так</p>
        <p class="Passport-paragr Passport-paragr--grey">
            <mark class="Passport-mark">Споживач має право:</mark>достроково повернути споживчий кредит без будь-якої додаткової плати, пов’язаної з
            достроковим поверненням. Договором про споживчий кредит може бути встановлений обов’язок повідомлення кредитодавця про намір дострокового повернення
            споживчого кредиту з оформленням відповідного документа.</p>
     <p class="Passport-paragr Passport-paragr--white">Умови договору про споживчий  кредит можуть відрізнятися від інформації, наведеної в цьому Паспорті
            споживчого кредиту, та будуть залежати від проведеної кредитодавцем оцінки кредитоспроможності споживача з урахуванням, зокрема, наданої ним інформації
            про майновий та сімейний стан, розмір доходів тощо.</p></div>
        <button class="Passport-buttonHideAll">Свернуть все</button>
        <label class="Passport-labelCheck">
            <input class="Passport-inputCheck" type="checkbox">Ознайомився (-лась)  та згоден (-на) </label>
        <p class="Passport-errorText"></p>
        <button class="Passport-buttonContinue buttonType">Продовжити</button>
    </main>`;

    appendData(){
        document.querySelector(".Main").remove();
        document.querySelector(".Passport").innerHTML = this.rulesHTML;
        this.buttonContinue = document.querySelector(".Passport-buttonContinue");
        this.buttonHideAll = document.querySelector(".Passport-buttonHideAll");

        let f = this;
        this.buttonHideAll.addEventListener("click",function (e,ef) {
            this.divPassword = document.querySelector(".PassportDiv");
            if(this.divPassword.style.display === "block"){
                this.divPassword.style.display = "none";
                f.buttonHideAll.innerHTML = "Раскрыть всё";
            }else {
                this.divPassword.style.display = "block";
                f.buttonHideAll.innerHTML = "Свернуть всё";
            }
        });

        this.buttonContinue.addEventListener("click",function () {
            this.inputCheck = document.querySelector(".Passport-inputCheck");
            this.errorParagraph = document.querySelector(".Passport-errorText");
            if(this.inputCheck.checked){
                this.errorParagraph.innerHTML = "";

                new Borrower().appendTextBorrower();
            }else {
                this.errorParagraph.innerHTML = "Согласитесь с условиями";
            }
        });

    }
}