import EmailSend from './emailSend.js';

export default function success() {

    fetch("../json/success.json").then(function (ful) {
        ful.json().then(function (res) {
            repaint(res);
            setClick();
        })
    });

    function setClick() {
        let buttonEmail = document.querySelector(".PassportFinal-button--email");

        buttonEmail.onclick = function () {
            new EmailSend();
        }
    }

    function repaint(res) {
        let main = document.querySelector(".Passport");
        main.removeChild(main.children[1]);
        main.querySelector(".Passport-header").textContent = res.header;
        main.querySelector(".Passport-step").textContent = res.step;
        main.querySelector(".Passport-percent").textContent = res.percent;
        document.querySelector(".Passport-bar").style.width = "100%";
        main.style.padding = "0";
        let section = document.createElement("section");
        section.className = "PassportFinal";
        section.innerHTML = `
        <h2 class="PassportFinal-h2">${res.application_created}</h2>
        <img class="PassportFinal-checkImg" src="../src/images/ok.svg" alt="">
        <div class="PassportFinal-container">
            <div class="PassportFinal-exclamation">!</div>
        <p class="PassportFinal-client">${res.client}</p></div>
        <p class="PassportFinal-contract">${res.contract}</p>
        <button class="PassportFinal-button PassportFinal-button--pdf">${res.pdf}</button>
        <button class="PassportFinal-button PassportFinal-button--email">${res.email}</button>`;

        main.appendChild(section);
    }
}