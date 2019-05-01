import success from "./success.js";
import errorS from "./errorServer.js";

export default function loading(thisArg, argArray) {

    fetch("../json/loading.json").then(function (ful) {
        ful.json().then(function (res) {
            repaint(res);
            loadingInfo();
        })
    });

    function repaint(json) {
        document.querySelector(".Passport").remove();
        if (!document.querySelector(".confirmation_css"))
            document.head.insertAdjacentHTML("beforeend",
                `<link class="confirmation_css" rel="stylesheet" href="../css/index/mobile_confirmation.css">`);

        let main = ` <main class="Passport">
            <section><h2 class="Passport-header">${json.header}</h2>
             <p class="Passport-step">${json.step}</p>
             <div class="Passport-divBar">
                <hr class="Passport-bar Passport-bar--80"></div>
             <p class="Passport-progress">${json.progress}
             <strong class="Passport-percent">${json.percent}</strong></p></section>
                <svg class="Passport-spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg></main>`;
        document.querySelector(".Header").insertAdjacentHTML("afterend", main);
        window.scrollTo(0, 0);
    }

    function loadingInfo() {
        setTimeout(() => {
            (Math.trunc(Math.random() * 2)) ? success() : errorS();
        }, 1500)
    }

}