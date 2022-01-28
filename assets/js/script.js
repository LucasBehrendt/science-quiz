// Get burger icon & add event listener
let burger = document.querySelector(".burger")
burger.addEventListener('click', menu)

/**
 * When menu burger icon is clicked, icon will change to a cross
 * and the menu will be displayed
 */
function menu() {
    burger.classList.toggle("change");
}