
function loadMenuPage() {
    let content = document.querySelector("#content");
    let menu = document.createElement("div");
    menu.textContent = "Menu";
    content.appendChild(menu);
}

export { loadMenuPage };