// import a saved image
import heavyMeal from "./heavyMeal.png";

const days = [
    "Sunday: 10 am - 9 pm",
    "Monday: 9 am - 9 pm",
    "Tuesday: 9 am - 9 pm",
    "Wednesday: 9 am - 9 pm",
    "Thursday: 9 am - 9 pm",
    "Friday: 9 am - 11 pm",
    "Saturday: 9 am - 11 pm"
];

// layout: 
// content
//      container
//          homePage
//          info
//              hours
function loadHomePage(){
    let content = document.querySelector("#content");
    let container = document.createElement("div");
    container.id = "homeContainer";
    content.appendChild(container);

    let homePage = document.createElement("div");
    homePage.id = "homePage";
    container.appendChild(homePage);

    let left = document.createElement("div");
    left.id = "homePageLeft";
    homePage.appendChild(left);

    let headline = document.createElement("div");
    headline.id = "headline";
    headline.classList.add("title");
    // \x20\xA0 is hex code for a non-breaking space, aka &nbsp
    // I want one here bc a single space in this font is too small
    headline.textContent = "THE\x20\xA0 LUNCHBOX";
    left.appendChild(headline);

    let text = document.createElement("div");
    text.id = "text";
    text.textContent = "We have lots of yummy & delicious food here, come try it";
    left.appendChild(text);

    let img = document.createElement("img");
    img.id = img;
    img.src = heavyMeal;
    homePage.appendChild(img);

    let info = document.createElement("div");
    info.id = "info";
    container.appendChild(info);

    let hours = document.createElement("div");
    info.appendChild(hours);

    let hoursHeading = document.createElement("h3");
    hoursHeading.textContent = "HOURS";
    hoursHeading.classList.add("title")
    hours.appendChild(hoursHeading);

    let list = document.createElement("ul");
    list.id = "hoursList";
    for(let i = 0; i < 7; i++) {
        let day = document.createElement("li");
        day.textContent = days[i];
        list.appendChild(day);
    }
    hours.appendChild(list);

    let location = document.createElement("div");
    info.appendChild(location);

    let locationHeader = document.createElement("h3");
    locationHeader.textContent = "LOCATION";
    locationHeader.classList.add("title");
    location.appendChild(locationHeader);

    let address = document.createElement("div");
    address.id = "address";
    address.textContent = "123 Mann Way, Teufort, New Mexico"
    location.appendChild(address);
}

// export the function
export { loadHomePage };