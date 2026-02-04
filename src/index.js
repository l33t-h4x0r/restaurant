import "./styles.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

loadHomePage();

const homeBtn = document.querySelector("#homebtn");
const menuBtn = document.querySelector("#menubtn");
const contactBtn = document.querySelector("#contactbtn"); 

function switchTab(tab) {
    // clear currnet content
    let currentNodes = document.querySelectorAll("#content *");
    for(let i = 0; i < currentNodes.length; i++) {
        currentNodes[i].remove();
    }

    homeBtn.classList.toggle("clicked", false);
    menuBtn.classList.toggle("clicked", false);
    contactBtn.classList.toggle("clicked", false);

    // fill new content
    switch(tab) {
        case 0:
            loadHomePage();
            homeBtn.classList.toggle("clicked", true);
            break;
        case 1:
            loadMenuPage();
            menuBtn.classList.toggle("clicked", true);
            break;
        case 2:
            loadContactPage();
            contactBtn.classList.toggle("clicked", true);
            break;
    }
}

// navigation bar event listeners
homeBtn.addEventListener("click", () => {
    switchTab(0);
});
menuBtn.addEventListener("click", () => {
    switchTab(1);
});
contactBtn.addEventListener("click", () => {
    switchTab(2);
});
