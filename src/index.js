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
    console.log(`clearing ${currentNodes.length} nodes`);
    for(let i = 0; i < currentNodes.length; i++) {
        currentNodes[i].remove();
    }
    // fill new content
    switch(tab) {
        case 0:
            loadHomePage();
            break;
        case 1:
            loadMenuPage();
            break;
        case 2:
            loadContactPage();
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
