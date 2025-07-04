// start swiper functionalty
const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ==================================================================================================

// Change the vertical scrolling to horizontal
const homeBodyScroll = document.querySelector('.home-body');

homeBodyScroll.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        homeBodyScroll.scrollLeft += e.deltaX; 
    } else {
        homeBodyScroll.scrollLeft += e.deltaY;
    }
});

// ==================================================================================================

// functionalty of active page in nav bar

const listItems = document.querySelectorAll(".list ul li")

// function of clear active
function clearActiveClasses() {
    listItems.forEach((li) => li.classList.remove("active"));
}

// the main function
listItems.forEach((item, index) => {

    item.addEventListener("click", () => {
        clearActiveClasses();
        item.classList.add("active")

        // add to sessionstorage
        window.sessionStorage.setItem(`itemId` , `${index}`)
    })

    // check the local storage to add active

    let storedIndex = window.sessionStorage.getItem("itemId");
    if (storedIndex) {
        if (storedIndex == index) {
            clearActiveClasses();
            item.classList.add("active")
        }
    }
})

// anther code by chat GPT ==> this code is use Event Delegation by target

// const ul = document.querySelector(".list ul");

// ul.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {

//         ul.querySelectorAll("li").forEach((li) => li.classList.remove("active"));

//         e.target.classList.add("active");
//     }
// });

// ==================================================================================================

// functionalty of bar Content

// let barContent = document.getElementById("barContent")
// let spanOne = document.getElementById("spanOne")
// let spanTwo = document.getElementById("spanTwo")
// let spanThree = document.getElementById("spanThree")
// let menu = document.getElementById("menu");
// let overlaylayer = document.querySelector(".overlay-layer")

// barContent.addEventListener("click", () => {
//     spanOne.classList.toggle("left");
//     spanTwo.classList.toggle("hide");
//     spanThree.classList.toggle("right");
//     menu.classList.toggle("display");
//     overlaylayer.classList.toggle("overlay");
// })

// document.addEventListener("click", (e) => {
//     if (menu.classList.contains("display")) {
//         // Check if click is outside the navbar and button
//         if (!barContent.contains(e.target) && (!menu.contains(e.target))) {
//             menu.classList.toggle("display");
//             spanOne.classList.toggle("left");
//             spanTwo.classList.toggle("hide");
//             spanThree.classList.toggle("right");
//             overlaylayer.classList.remove("overlay")
//         }
//     };
// })

// window.onscroll = (e) => {
//     if (menu.classList.contains("display")) {
//         // Check if click is outside the navbar and button
//         if (!barContent.contains(e.target) && (!menu.contains(e.target))) {
//             menu.classList.toggle("display")
//             spanOne.classList.toggle("left");
//             spanTwo.classList.toggle("hide");
//             spanThree.classList.toggle("right");
//             overlaylayer.classList.remove("overlay")
//         }
//     };
// }