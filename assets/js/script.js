// Get variables & add event listeners
let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let home = document.querySelector(".home-section")
let startBtn = document.getElementById("start-btn")
let homeBtn = document.getElementById("home-btn")
let difficultyBtn = document.getElementById("difficulty-btn")
let howToBtn = document.getElementById("how-to-btn")
let difficultyMenu = document.querySelector(".difficulty")
let howToMenu = document.querySelector(".how-to")

burger.addEventListener("click", showMenu)
homeBtn.addEventListener("click", showHome)
difficultyBtn.addEventListener("click", showDifficultyMenu)
howToBtn.addEventListener("click", showHowTo)

// Easy quiz questions
let easyQuestions = [
    {
        question: "At what temperature does water first boil?",
        options: ["-100°C", "100°C", "0°C", "1000°C"],
        answer: "100°C"
    },
    {
        question: "What is the repeated sound when sound waves bounce off other objects called?",
        options: ["Acho", "Marco", "Echo", "Polo"],
        answer: "Echo"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "WHO", "H02"],
        answer: "H2O"
    },
    {
        question: "What is the tallest land animal?",
        options: ["Giraffe", "Polar bear", "Moose", "Elephant"],
        answer: "Giraffe"
    },
    {
        question: "Which person is known for establishing the laws of motion and gravity?",
        options: ["Stephen Hawking", "Marie Curie", "Albert Einstein", "Isaac Newton"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the distance that light travels in a year called?",
        options: ["Parsec", "Light Year", "Lumen Year", "Light Mile"],
        answer: "Light Year"
    },
    {
        question: "Which element is the primary component of steel wool?",
        options: ["Iron", "Carbon", "Uranium", "Silver"],
        answer: "Iron"
    },
    {
        question: "What gas makes soda bubbly?",
        options: ["Xenon", "Methane", "Nitrogen", "Carbon Dioxide"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What particle in an atom has a positive charge?",
        options: ["Neutron", "Proton", "Antitron", "Electron"],
        answer: "Proton"
    },
    {
        question: "What makes up about 70 percent of most living things?",
        options: ["Protein", "Sugar", "Water", "Lead"],
        answer: "Water"
    },
]


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

/**
 * When how to play button in menu is clicked, displays the how to play section
 */
 function showHowTo() {
    burger.classList.remove("change");
    menu.classList.add("hide");
    howToMenu.classList.remove("hide");
}