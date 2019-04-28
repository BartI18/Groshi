export default function Email () {

    fetch("../json/email.json").then(function (res) {
        return res.json().then(function (res) {
            paint(res);
        })
    });

    function paint(res) {
        let main = document.querySelector(".Passport");
        main.removeChild(main.children[1]);
        main.querySelector(".Passport-header").textContent = res.header;
        let section = document.createElement("section");
        section.className = "PassportEmail";
        section.innerHTML = `<h2  class="PassportEmail-specifyYour">${res.specify_your}</h2>
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
        <button class="PassportEmail-continueButton buttonType">${res.continue}</button>`;

        main.appendChild(section);
    }
}