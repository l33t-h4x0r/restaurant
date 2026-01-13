function loadContactPage() {
    let content = document.querySelector("#content");
    let contact = document.createElement("div");
    contact.textContent = "Contact";
    content.appendChild(contact);
}

export { loadContactPage };