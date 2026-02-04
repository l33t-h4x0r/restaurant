import heavy from "./heavychef.png";
import medic from "./medicchef.png";
import pyro from "./pyrochef.png";

const chefs = [heavy, medic, pyro];
const names = [
    "Mikhail",
    "Dr. Ludwig",
    "[REDACTED]"
]
const titles = [
    "Chef de Cuisine",
    "Boucher",
    "Rotisseur"
]

function loadContactPage() {
    let content = document.querySelector("#content");

    let header = document.createElement("div");
    header.classList.add("title");
    header.id = "chefTitle";
    header.textContent = ("Meet the Chefs");
    content.appendChild(header);

    let container = document.createElement("div");
    container.id = "chefList";
    content.appendChild(container);

    

    for(let i = 0; i < chefs.length; i++){
        let chef = document.createElement("div");
        chef.classList.add("chef");

        let wrapper = document.createElement("div");
        wrapper.classList.add("chefPicWrapper");

        let pic = document.createElement("img");
        pic.src = chefs[i];
        pic.classList.add("chefPic");

        let title = document.createElement("div");
        title.textContent = titles[i];
        title.classList.add("chefTitle");

        let name = document.createElement("div");
        name.textContent = names[i];
        name.classList.add("chefName");

        chef.appendChild(wrapper);
        wrapper.appendChild(pic);
        chef.appendChild(title);
        chef.appendChild(name);

        container.appendChild(chef);
    }
}

export { loadContactPage };