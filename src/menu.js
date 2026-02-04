
import sandvich from "./sandvich.webp";
import buffalo from "./buffalosteak.png";
import banana from "./secondbanana.png";
import dalokohs from "./dalokohsbar.png";
import fishcake from "./fishcake.png";

const images = [sandvich, buffalo, banana, dalokohs, fishcake];
const menuNames = [ 
    "SANDVICH",
    "BUFFALO STEAK SANDVICH",
    "SECOND BANANA",
    "DALOKOHS BAR",
    "FISHCAKE"
];
const menuDescriptions = [
    "A nutricious sandvich",
    "A hearty buffalo steak sandvich. Who needs bread?",
    "We've had one, yes. What about second banana?",
    "A tasty dalokohs bar. It's delicious!",
    "Fish in the form of a cake (not a lie)"
];

function loadMenuPage() {
    
    let content = document.querySelector("#content");
    let menuPage = document.createElement("div");
    menuPage.id = "menuPage";
    content.appendChild(menuPage);

    let title = document.createElement("h1");
    title.textContent = "MENU";
    title.id = "menuTitle";
    title.classList.add("title");
    menuPage.appendChild(title);
    // builds menu item cards with this structure:
    //
    // menuItem > left  > imageWrapper > image
    //                  > name   
    //          > right
    for(let i = 0; i < 5; i++) {
        let menuItem = document.createElement("div");
        menuItem.id = `menuItem${i}`;
        menuItem.classList.add("menuItem");
        menuPage.appendChild(menuItem);

        let left = document.createElement("div");
        left.classList.add("menuLeft");

        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("imageWrapper");

        let image = document.createElement("img");
        image.src = images[i];
        image.classList.add("menuImage");

        let name = document.createElement("div");
        name.textContent = menuNames[i];
        name.classList.add("menuName");

        left.appendChild(imageWrapper);
        imageWrapper.appendChild(image);
        left.appendChild(name);

        let right = document.createElement("right");
        right.textContent = menuDescriptions[i];
        right.classList.add("menuRight");

        menuItem.appendChild(left);
        menuItem.appendChild(right);
    }
}

export { loadMenuPage };