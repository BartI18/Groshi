import emailSend from './emailSend.mjs';

export default function success() {

    fetch("../json/success.json").then((ful) => {
        ful.json().then((res) => {
            document.querySelector(".Passport").remove();
            let section = `<main class="Passport Passport--padding0">
                <section class="PassportMain"><h2 class="Passport-header">${res.header}</h2>
                    <p class="Passport-step">${res.step}</p>
                    <div class="Passport-divBar">
                        <hr class="Passport-bar Passport-bar--100"></div>
                        <p class="Passport-progress">${res.progress}
                        <strong class="Passport-percent">${res.percent}</strong></p></section>
                <section class="PassportFinal">
                    <h2 class="PassportFinal-h2">${res.application_created}</h2>
                    <img class="PassportFinal-checkImg" src="../src/images/ok.svg" alt="">
                    <div class="PassportFinal-container">
                        <div class="PassportFinal-exclamation">!</div>
                    <p class="PassportFinal-client">${res.client}</p></div>
                    <p class="PassportFinal-contract">${res.contract}</p>
                    <button class="PassportFinal-button PassportFinal-button--pdf">${res.pdf}</button>
                    <button class="PassportFinal-button PassportFinal-button--email">${res.email}</button></section>`;

            document.querySelector(".Header").insertAdjacentHTML("afterend", section);
            document.querySelector(".PassportFinal-button--email").onclick = () => emailSend();
        });
    });

}