import {Const} from './consts.mjs';
export default function email() {
    fetch(Const.PATH_EMAIL).then((res) => {
        return res.json().then((res) => {
            document.querySelector(".Passport").remove();
            let main = `<main class="Passport Passport--padding0">
                <section class="PassportMain"><h2 class="Passport-header">${res.header}</h2>
                    <p class="Passport-step">${res.step}</p>
                <div class="Passport-divBar">
                    <hr class="Passport-bar Passport-bar--100"></div>
                    <p class="Passport-progress">${res.progress}
                    <strong class="Passport-percent">${res.percent}</strong></p></section>
        <section class="PassportEmail">
            <h2  class="PassportEmail-specifyYour">${res.specify_your}</h2>
            <picture class="PassportEmail-picture">
                <source srcset="./src/images/email/page_mobile.webp" type="image/webp">
                <img class="PassportEmail-emailImg" src="./src/images/email/page_mobile.png" alt="error image">
            </picture>
            <input class="PassportEmail-input" placeholder="email">
            <p class="PassportEmail-subscribe">${res.subscribe}</p>
            <button class="PassportEmail-continueButton buttonType">${res.send}</button></section>`;
            document.querySelector(".Header").insertAdjacentHTML("afterend", main);

            document.querySelector(".PassportEmail-continueButton").onclick = () => {
                document.querySelector(".PassportEmail-subscribe").textContent = res.email_result;
                setInterval(() => location.href = Const.HOME_PAGE, 1000);
            }
        })
    });
}