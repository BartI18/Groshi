import loading from './loading.mjs';

export default function errorServer() {

    fetch("../json/error.json").then(function (ful) {
        ful.json().then((res) => {
            document.querySelector(".Passport").remove();
            let section = `<main class="Passport Passport--padding10">
                <section class="PassportMain"><h2 class="Passport-header">${res.header}</h2>
                     <p class="Passport-step">${res.step}</p>
                     <div class="Passport-divBar">
                        <hr class="Passport-bar Passport-bar--80"></div>
                     <p class="Passport-progress">${res.progress}
                     <strong class="Passport-percent">${res.percent}</strong></p></section>
                <section class="PassportFinal">
            <h2 class="PassportFinal-h2">${res.wrong}</h2>
            <picture class="PassportFinal-picture">
                    <source srcset="../src/images/error/group_mobile.webp" type="image/webp">
                    <img class="PassportFinal-checkImg" src="../src/images/error/group_mobile.png" alt="error image">
                </picture>
            <div class="PassportFinal-container">
                <div class="PassportFinal-exclamation">!</div>
            <p class="PassportFinal-client">${res.technical_failure}</p></div>
            <button class="PassportFinal-button PassportFinal-button--retry">${res.Retry}</button></section>`;

            document.querySelector(".Header").insertAdjacentHTML("afterend", section);
            document.querySelector(".PassportFinal-button--retry").onclick = () => loading();
        });
    });

}