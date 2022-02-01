// Get variables & add event listeners
let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let home = document.querySelector(".home-section");
let startBtn = document.getElementById("start-btn");
let homeBtn = document.getElementById("home-btn");
let difficultyBtn = document.getElementById("difficulty-btn");
let howToBtn = document.getElementById("how-to-btn");
let difficultyMenu = document.querySelector(".difficulty");
let easyBtn = document.getElementById("easy-btn");
let mediumBtn = document.getElementById("medium-btn");
let hardBtn = document.getElementById("hard-btn");
let howToMenu = document.querySelector(".how-to");
let quizGame = document.querySelector(".quiz-game");
let questionText = document.getElementById("question-text")
let answerBtn1 = document.getElementById("answer-btn-1");
let answerBtn2 = document.getElementById("answer-btn-2");
let answerBtn3 = document.getElementById("answer-btn-3");
let answerBtn4 = document.getElementById("answer-btn-4");
let nextQuestionBtn = document.getElementById("next-question")
let currentQuestion = 0;
let shuffledQuestions = 0;

burger.addEventListener("click", showMenu);
startBtn.addEventListener("click", runGame);
easyBtn.addEventListener("click", runGame);
mediumBtn.addEventListener("click", runGame);
hardBtn.addEventListener("click", runGame);
homeBtn.addEventListener("click", showHome);
difficultyBtn.addEventListener("click", showDifficultyMenu);
howToBtn.addEventListener("click", showHowTo);

// All quiz questions taken from https://www.triviawell.com/questions/science
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
    }
];

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
    }
];

// Hard quiz questions
let hardQuestions = [
    {
        question: "What is the name for the Sun's outer-most atmosphere?",
        options: ["Stratosphere", "Corona", "Photosphere", "Chromosphere"],
        answer: "Corona"
    },
    {
        question: "How many watts is one horsepower equal to?",
        options: ["746 W", "541 W", "121 W", "1981 W"],
        answer: "746 W"
    },
    {
        question: "The first vaccine targeted which disease?",
        options: ["Rubella", "Smallpox", "Polio", "Measles"],
        answer: "Smallpox"
    },
    {
        question: "Heavy water contains what isotopic form of hydrogen?",
        options: ["Deuterium", "Protium", "Hydrogen-4", "Tritium"],
        answer: "Deuterium"
    },
    {
        question: "What unit is resistance measured in?",
        options: ["Gauss", "Ampere", "Joule", "Ohm"],
        answer: "Ohm"
    },
    {
        question: "Who is credited with creating the 'Big Bang Theory'?",
        options: ["Albert Einstein", "Edwin Hubble", "Carl Sagan", "Georges Lemaitre"],
        answer: "Georges Lemaitre"
    },
    {
        question: "What is a scientist who specializes in the study of cells called?",
        options: ["Eugenicist", "Embryologist", "Cytologist", "Histologist"],
        answer: "Cytologist"
    },
    {
        question: "The diameter of an atom is measured in which unit?",
        options: ["Lambda", "Hebdometre", "Angstrom", "Basic module"],
        answer: "Angstrom"
    },
    {
        question: "In a triple bond, how many pi and sigma bonds are there?",
        options: ["Three Pi, Zero Sigma", "Zero Pi, Three Sigma", "One Pi, Two Sigma", "Two Pi, One Sigma"],
        answer: "Two Pi, One Sigma"
    },
    {
        question: "About how many days does it take for the moon to pass through all phases?",
        options: ["28", "29", "30", "31"],
        answer: "29"
    }
];

// Shuffle array source: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
/**
 * When start button or one of the difficulty select buttons are clicked, 
 * displays the quiz game and starts the quiz
 */
 function runGame(event) {
    burger.classList.remove("change");
    burger.classList.add("hide");
    home.classList.add("hide");
    difficultyMenu.classList.add("hide");
    quizGame.classList.remove("hide");
    let difficulty = event.target.id;
    if (difficulty === "start-btn") {
        shuffledQuestions = easyQuestions.sort(() => 0.5 - Math.random());
    } else if (difficulty === "easy-btn") {
        shuffledQuestions = easyQuestions.sort(() => 0.5 - Math.random());
    } else if (difficulty === "medium-btn") {
        shuffledQuestions = mediumQuestions.sort(() => 0.5 - Math.random());
    } else if (difficulty === "hard-btn") {
        shuffledQuestions = hardQuestions.sort(() => 0.5 - Math.random());
    }
    displayQuestion();
}

/**
 * Displays the questions and options on the quiz page
 */
function displayQuestion() {
    if (currentQuestion <= 10) {
        for (let i = 0; i < shuffledQuestions.length; i++) {
            questionText.innerHTML = shuffledQuestions[0].question;
            answerBtn1.innerHTML = shuffledQuestions[0].options[0];
            answerBtn2.innerHTML = shuffledQuestions[0].options[1];
            answerBtn3.innerHTML = shuffledQuestions[0].options[2];
            answerBtn4.innerHTML = shuffledQuestions[0].options[3];
            answerBtn1.addEventListener("click", checkAnswer);
            answerBtn2.addEventListener("click", checkAnswer);
            answerBtn3.addEventListener("click", checkAnswer);
            answerBtn4.addEventListener("click", checkAnswer);
        }
    } else {
        quizGame.classList.add("hide");
        result.classList.remove("hide");
    }
}

/**
 * When the player clicks an option, checks to see if the correct answer was clicked
 */
function checkAnswer() {
    if (this.innerHTML === shuffledQuestions[0].answer) {
        // alert('correct');
        incrementScore()
        this.classList.add("correct")
    }
}

/**
 * Increments the score when a correct answer is submitted
 */
function incrementScore() {
    let lastScore = document.getElementById("score-count").innerHTML;
    document.getElementById("score-count").innerHTML = ++lastScore;
}

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