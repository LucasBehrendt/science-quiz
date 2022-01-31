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

// Medium quiz questions
let mediumQuestions = [
    {
        question: "Which company manufactures Pentium chipsets?",
        options: ["AMD", "Microsoft", "Intel", "Apple"],
        answer: "Intel"
    },
    {
        question: "What is the name for the boundary around a black hole, beyond which events cannot affect the observer?",
        options: ["Event Horizon", "Absolute Point", "Black Line", "Event Silence"],
        answer: "Event Horizon"
    },
    {
        question: "What is table salt's chemical name?",
        options: ["Lithium Chloride", "Potassium", "Sodium Chloride", "Sodium Hydroxide"],
        answer: "Sodium Chloride"
    },
    {
        question: "What is the wearing away of parts of the Earth by water or wind called?",
        options: ["Corrosion", "Erosion", "Dilution", "Sedimentation"],
        answer: "Erosion"
    },
    {
        question: "What is a person who specializes in the study of plants called?",
        options: ["Plantist", "Geologist", "Oboist", "Botanist"],
        answer: "Botanist"
    },
    {
        question: "Between which two planets does the asteroid belt lie?",
        options: ["Uranus and Neptune", "Jupiter and Saturn", "Mars and Jupiter", "Mercury and Venus"],
        answer: "Mars and Jupiter"
    },
    {
        question: "What disaster is a combo of downdrafts and updrafts?",
        options: ["Snowstorm", "Tsunami", "Volcanic Eruption", "Tornado"],
        answer: "Tornado"
    },
    {
        question: "What are the small bones that make up a backbone called?",
        options: ["Sternum", "Vertebrae", "Maxilla", "Ulna"],
        answer: "Vertebrae"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Pb", "Fe", "Au"],
        answer: "Au"
    },
    {
        question: "Who was the first person in space?",
        options: ["Yuri Gagarin", "Laika", "Neil Armstrong", "Valentina Tereshkova"],
        answer: "Yuri Gagarin"
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