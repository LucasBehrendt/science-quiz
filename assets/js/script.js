// Get variables & add event listeners
let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let home = document.querySelector(".home-section")
let startBtn = document.getElementById("start-btn")
let homeBtn = document.getElementById("home-btn")
let difficultyBtn = document.getElementById("difficulty-btn")
let howToBtn = document.getElementById("how-to-btn")
let difficultyMenu = document.querySelector(".difficulty")

burger.addEventListener("click", showMenu)
homeBtn.addEventListener("click", showHome)
difficultyBtn.addEventListener("click", showDifficultyMenu)


/**
 * When menu burger icon is clicked, icon will change to a cross
 * and the menu will be displayed
 */
function showMenu() {
    if (burger.classList.contains("change")) {
        burger.classList.remove("change");
        menu.classList.add("hide");
        home.classList.remove("hide");
    } else {
        burger.classList.add("change");
        menu.classList.remove("hide");
        home.classList.add("hide");
        difficultyMenu.classList.add("hide");
        howToMenu.classList.add("hide");
    }
}

/**
 * When home button in menu is clicked, displays the home section
 */
 function showHome() {
    burger.classList.remove("change");
    menu.classList.add("hide");
    home.classList.remove("hide");
}

/**
 * When difficulty button in menu is clicked, displays the difficulty section
 */
function showDifficultyMenu() {
    burger.classList.remove("change");
    menu.classList.add("hide");
    difficultyMenu.classList.remove("hide");
}
