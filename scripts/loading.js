import Success from "./success.js";
import ErrorS from "./errorServer.js";

export default function loading(thisArg, argArray) {

    fetch("../json/loading.json").then(function (ful) {
        ful.json().then(function (res) {
            repaint(res);
            loadingInfo();
        })
    });

    function repaint(json) {
        let main = document.querySelector(".Passport");
        while (main.firstChild)
            main.removeChild(main.firstChild);
        let style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "../css/index/mobile_confirmation.css";
        document.head.appendChild(style);
        main.style.paddingBottom = "20rem";

        main.innerHTML = `
            <section><h2 class="Passport-header">${json.header}</h2>
             <p class="Passport-step">${json.step}</p>
             <hr class="Passport-bar">
             <p class="Passport-progress">${json.progress}
             <strong class="Passport-percent">${json.percent}</strong></p></section>
                <svg class="Passport-spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>`;
        window.scrollTo(0, 0);
    }

    function loadingInfo() {
        setTimeout(function () {
            return (Math.trunc(Math.random() * 2)) ? new Success() : new ErrorS();
        }, 1500)
    }

}