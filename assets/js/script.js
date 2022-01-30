// Get variables & add event listeners
let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let home = document.querySelector(".home-section")
burger.addEventListener("click", showMenu)

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