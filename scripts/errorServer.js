import loading from './loading.js';

export default function errorServer() {

    fetch("../json/error.json").then(function (ful) {
        ful.json().then(function (res) {
            repaint(res);
            document.querySelector(".PassportFinal-button--retry").onclick = () => loading();
        })
    });

    function repaint(res) {
        document.querySelector(".Passport").remove();
        let section = `<main class="Passport Passport--padding0">
            <section><h2 class="Passport-header">${res.header}</h2>
             <p class="Passport-step">${res.step}</p>
             <div class="Passport-divBar">
                <hr class="Passport-bar Passport-bar--80"></div>
             <p class="Passport-progress">${res.progress}
             <strong class="Passport-percent">${res.percent}</strong></p></section>
        <section class="PassportFinal">
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
        <button class="PassportFinal-button PassportFinal-button--retry">${res.Retry}</button></section>`;

        document.querySelector(".Header").insertAdjacentHTML("afterend", section);
    }
}