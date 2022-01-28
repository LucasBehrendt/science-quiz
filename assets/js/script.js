// Get variables & add event listeners
let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let home = document.querySelector(".home-section")
burger.addEventListener('click', displayMenu)

/**
 * When menu burger icon is clicked, icon will change to a cross
 * and the menu will be displayed
 */
function displayMenu() {
    burger.classList.toggle("change");
    menu.classList.toggle("hide");
    home.classList.toggle("hide");
}