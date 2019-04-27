import Loading from './loading.js';

export default function errorServer() {

    fetch("../json/error.json").then(function (ful) {
        ful.json().then(function (res) {
            repaint(res);
            setEventL();
        })
    });

    function repaint(res) {
        let main = document.querySelector(".Passport");
        main.removeChild(main.children[1]);
        main.querySelector(".Passport-header").textContent = res.header;
        main.querySelector(".Passport-step").textContent = res.step;
        main.querySelector(".Passport-percent").textContent = res.percent;
        main.style.padding = 0;
        let section = document.createElement("section");
        section.className = "PassportFinal";
        section.innerHTML = `
        <h2 class="PassportFinal-h2">${res.wrong}</h2>
        <picture class="PassportFinal-picture">
                <source srcset="../src/images/error/group_tablet.webp" media="(min-width: 426px) and (max-width:1024px)" type="image/webp">
                <source srcset="../src/images/error/group_tablet.png" media="(min-width: 426px) and (max-width:1024px)" type="image/jpeg">
                <source srcset="../src/images/error/group_desktop.webp" media="(min-width: 1025px)" type="image/webp">
                <source srcset="../src/images/error/group_desktop.png" media="(min-width: 1025px)" type="image/jpeg">
                <source srcset="../src/images/error/group_mobile.webp" type="image/webp">
                <img class="PassportFinal-checkImg" src="../src/images/error/group_mobile.png" alt="error image">
            </picture>
        <div class="PassportFinal-container">
            <div class="PassportFinal-exclamation">!</div>
        <p class="PassportFinal-client">${res.technical_failure}</p></div>
        <button class="PassportFinal-button PassportFinal-button--retry">${res.Retry}</button>`;

        main.appendChild(section);
    }

    function setEventL() {
        document.querySelector(".PassportFinal-button--retry").onclick = function () {
            new Loading();
        }
    }
}