export default class borrowerRequest{
    constructor(){};

    borrowerHTML =`
        <h2 class="PassportSectionBorrower-h2">Оберiть умови кредитування</h2>
        <h3 class="PassportSectionBorrower-h3">Заява позичальника № 12345678909877</h3>
        <p class="PassportSectionBorrower-p">Я, (ПІБ клієнта), дата народження, ідентифікований за карткою банку (номер карти), що проживає за адресою (Адреса клієнта), 
        паспорт ** № ******, виданий (Ким виданий), (ІПН клієнта), іменований далі «Позичальник», що діє на підставі особистого волевиявлення, прошу надати мені нижче 
        перераховані послуги.</p>
        <h3 class="PassportSectionBorrower-h3">БАНКІВСЬКІ ПОСЛУГИ Кредит</h3>
        <p class="PassportSectionBorrower-p">Банк надає Позичальнику строковий кредит у сумі (Сума кредиту) грн. (далі - «Кредит») на строк (Строк кредиту) місяців. Строк з ___ 
         по ___ включно, на наступні цілі: придбання споживчих товарів, зі сплатою за користування Кредитом відсотків у розмірі ___ в місяць, на суму виданого кредиту, що 
         сплачується щомісяця, у розмірі (Щомісячний платіж) грн., починаючи з "__" по "__" число кожного місяця, в обмін на зобов’язання  позичальника з повернення кредиту, 
         сплати відсотків, винагороди за надання фінансового інструменту ___ грн, комісії в зазначені в Заяві та Правилах та Умовах надання кредиту «Швидка готівка» (далі -"Умови 
         та Правила") строки. Погашення заборгованості здійснюється щомісяця, у розмірі (Щомісячний платіж) грн., які складаються із заборгованості за кредитом, відсотків, 
         винагороди, комісії, а також інших витрат згідно з Умовами. Дата останнього погашення заборгованості має бути не пізнішою ніж **-**-**** р. Згідно ст.212, 611, 651
          Цивільного кодексу України при порушенні Позичальником строків погашення заборгованості, зазначених в цій Заяві, Умовах та правилах понад 210 днів , щодо зобов’язань,
           строк яких не настав, Сторони узгодили, що терміном повернення кредиту вважається 211 день з моменту виникнення порушення. Заборгованість за Кредитом, починаючи з 211
            дня порушення, вважається простроченою. Кредит надається Банком шляхом зарахування грошових коштів на платіжну картку Позичальника No (номер карти). Погашення 
            заборгованості за Кредитом Позичальник здійснює шляхом зарахування грошей на рахунок No 2909*, з якого Банк здійснює списання грошей на погашення заборгованості
             за Кредитом. При порушенні Позичальником зобов’язань із погашення Кредиту, Позичальник сплачує Банку пеню, розмір якої зазначений у Умовах та правилах за кожний 
             день прострочення. Відсоткова ставка за кредитом може змінюватися в залежності від змін облікової ставки НБУ чи в інших випадках, відповідно до Умов та правил.
              Позичальник дає згоду на збір, зберігання, використання та поширення через бюро кредитних історій інформації щодо його кредитної історії. Позичальник доручає 
              Банку здійснювати погашення заборгованості за Кредитом у передбачені строки зарахунок коштів, розміщених на платіжній картці Позичальника No (номер карти) та
               відповідно до Умов та правил. Я ознайомився(-лась) та згодний(-а) із Умовами, які були надані мені у письмовій формі. Своїм підписом я підтверджую факт надання мені
                повної інформації про умови кредитування в ПАТ КБ Приватбанк (а також його місцезнаходження), а саме: паспорт кредиту, мету, для якої кредит може бути витрачений;
                 форми його забезпечення; наявні форми кредитування з коротким описом відмінностей між ними, в тому числі між зобов'язаннями Позичальника; тип відсоткової ставки;
                  суму, на яку кредит може бути виданий; орієнтовну сукупну вартість кредиту та вартість послуги з оформлення договору (перелік усіх витрат, пов'язаних з одержанням
                   кредиту, його обслуговуванням та поверненням, зокрема таких як адміністративні витрати, витрати на страхування, юридичне оформлення тощо); строк, на який кредит
                    може бути одержаний; варіанти повернення кредиту, включаючи кількість платежів, їх частоту та обсяги; можливість дострокового повернення кредиту та його умови;
                     необхідність здійснення оцінки майна, якщо така оцінка є необхідною, ким вона здійснюється; податковий режим сплати відсотків та державні субсидії, на які 
                     Позичальник має право, і відомості про те, від кого Позичальник може одержати докладнішу інформацію; переваги та недоліки пропонованих схем кредитування.
            Цією Заявою, на підставі ст.634 Цивільного кодексу України, я приєднуюсь до Умов та правил надання кредиту «Швидка готівка», що розміщені на сайті Банку 
            https://privatbank.ua/terms,  що разом складають кредитний договір, та приймаю всі права та обов'язки, встановлені в цьому договорі. Я підтверджую, що вся надана 
            інформація достовірна. Зобов'язуюсь про всі зміни повідомляти в банк не пізніше 15 днів від моменту їх виникнення. Сторони узгодили, що для укладання цього договору
             використовується електронний підпис, а саме —   одноразовий пароль (OTP-пароль), який надсилається Банком на фінансовий телефон Клієнта, та введенням якого на сайті
              Банку або повідомленням працівнику Банка у відділенні Клієнт підтверджує прийняття прав та обовязків за даним Договором. Дата: **-**-**** р.</p>`;

    appendTextBorrower(){
        document.querySelector(".PassportDl").remove();
        document.querySelector(".PassportDiv").remove();
        document.querySelector(".Passport-buttonHideAll").remove();

        let section = document.createElement("section");
        section.className = "PassportSectionBorrower";
        section.innerHTML = this.borrowerHTML;
        document.querySelector(".Passport").insertBefore(section,document.querySelector(".Passport").children[0]);
    }
}