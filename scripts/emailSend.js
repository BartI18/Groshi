export default function email () {

    fetch("../json/email.json").then(function (res) {
        return res.json().then((res) => paint(res))
    });

    function paint(res) {
        document.querySelector(".Passport").remove();
        let main = `<main class="Passport Passport--padding0">
                <section><h2 class="Passport-header">${res.header}</h2>
                    <p class="Passport-step">${res.step}</p>
                <div class="Passport-divBar">
                    <hr class="Passport-bar Passport-bar--100"></div>
                    <p class="Passport-progress">${res.progress}
                    <strong class="Passport-percent">${res.percent}</strong></p></section>
        <section class="PassportEmail">
            <h2  class="PassportEmail-specifyYour">${res.specify_your}</h2>
            <picture class="PassportEmail-picture">
                <source srcset="../src/images/email/page_tablet.webp" media="(min-width: 426px) and (max-width:1024px)" type="image/webp">
                <source srcset="../src/images/email/page_tablet.png" media="(min-width: 426px) and (max-width:1024px)" type="image/jpeg">
                <source srcset="../src/images/email/page_desktop.webp" media="(min-width: 1025px)" type="image/webp">
                <source srcset="../src/images/email/page_desktop.png" media="(min-width: 1025px)" type="image/jpeg">
                <source srcset="../src/images/email/page_mobile.webp" type="image/webp">
                <img class="PassportEmail-emailImg" src="../src/images/email/page_mobile.png" alt="error image">
            </picture>
            <input class="PassportEmail-input" placeholder="email">
            <p class="PassportEmail-subscribe">${res.subscribe}</p>
            <button class="PassportEmail-continueButton buttonType">${res.continue}</button></section>`;

        document.querySelector(".Header").insertAdjacentHTML("afterend", main);
    }
}