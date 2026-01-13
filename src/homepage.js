// import a saved image
import sandvich from "./sandvich.webp";

function loadHomePage(){
    let content = document.querySelector("#content");

    let headline = document.createElement("div");
    headline.id = "headline";
    headline.textContent = "This is a Restaurant!";
    content.appendChild(headline);

    let text = document.createElement("div");
    text.id = "text";
    text.textContent = "We have lots of yummy & delicious food here, come try it";
    content.appendChild(text);

    let img = document.createElement("img");
    img.id = img;
    img.src = sandvich;
    content.appendChild(img);
}

// export the function
export { loadHomePage };