// Get global variables & add event listeners.
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
let homeIcon = document.querySelectorAll(".home-icon");
let questionText = document.getElementById("question-text");
let answerBtn1 = document.getElementById("answer-btn-1");
let answerBtn2 = document.getElementById("answer-btn-2");
let answerBtn3 = document.getElementById("answer-btn-3");
let answerBtn4 = document.getElementById("answer-btn-4");
let answerBtns = document.querySelectorAll(".answer-btn");
let nextQuestionBtn = document.getElementById("next-question");
let result = document.querySelector(".result");
let playAgain = document.getElementById("play-again");
let currentCount = document.getElementById("current-count");
let resultText = document.getElementById("result-text");
let lastScore = document.getElementById("score-count").innerHTML;
let incrementCount = 1;
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
playAgain.addEventListener("click", reload);

// Iterate through the home icons & add event listener to reload the page.
for (let i = 0; i < homeIcon.length; i++) {
    homeIcon[i].addEventListener("click", reload);
}

// Shuffle array source: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
/**
 * When start button or one of the difficulty select buttons are clicked, 
 * hides the start / menu page,
 * displays the quiz game and starts the quiz.
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
 * Displays the questions and options on the quiz page if the question count is below 10,
 * otherwise hides the quiz page and displays the results page.
 * User score is presented and one of five messages is displayed, depending on the score.
 */
function displayQuestion() {
    if (currentQuestion < 10) {
        for (let i = 0; i < shuffledQuestions.length; i++) {
            questionText.innerHTML = shuffledQuestions[currentQuestion].question;
            answerBtn1.innerHTML = shuffledQuestions[currentQuestion].options[0];
            answerBtn2.innerHTML = shuffledQuestions[currentQuestion].options[1];
            answerBtn3.innerHTML = shuffledQuestions[currentQuestion].options[2];
            answerBtn4.innerHTML = shuffledQuestions[currentQuestion].options[3];
            answerBtn1.addEventListener("click", checkAnswer);
            answerBtn2.addEventListener("click", checkAnswer);
            answerBtn3.addEventListener("click", checkAnswer);
            answerBtn4.addEventListener("click", checkAnswer);
        }
    } else {
        quizGame.classList.add("hide");
        result.classList.remove("hide");
        if (lastScore == 0) {
            resultText.innerHTML = `You answered ${lastScore} questions correct. I bet you can do better! Click "Play Again" to (hopefully) improve your score.`;
        } else if (lastScore <= 3) {
            resultText.innerHTML = `You answered ${lastScore} questions correct. Not terrible, but not very good... Click "Play Again" to try and get a better score.`;
        } else if (lastScore <= 6) {
            resultText.innerHTML = `You answered ${lastScore} questions correct. Good job! There is still room for improvement though... Click "Play Again" to try and get a better score.`;
        } else if (lastScore <= 9) {
            resultText.innerHTML = `You answered ${lastScore} questions correct. Nice! That was impressive, but not quite perfect. Click "Play Again" to try and get that perfect 10!`;
        } else {
            resultText.innerHTML = `You answered ${lastScore} questions correct. Wow, you are truly a science master! Click "Play Again" and perhaps try another difficulty?`;
        }
    }
}

// How to "unhover" buttons source: https://www.quora.com/How-to-unhover-an-element-with-an-active-hover-with-JS
/**
 * When the player clicks an option, checks to see if the correct answer was clicked.
 * The buttons are disabled to prevent clicking the buttons more than once, and the hover style is removed.
 * A background colour is added to the clicked button to reflect a correct/wrong answer.
 * If answer is incorrect, the correct answer also recieves the "correct" background colour to reveal the correct answer.
 */
function checkAnswer() {
    if (this.innerHTML === shuffledQuestions[currentQuestion].answer) {
        incrementScore();
        this.classList.add("correct");
    } else {
        this.classList.add("wrong");
    }
    for (let i = 0; i < answerBtns.length; i++) {
        answerBtns[i].disabled = true;
        answerBtns[i].style.pointerEvents = "none";
        if (answerBtns[i].innerHTML === shuffledQuestions[currentQuestion].answer) {
            answerBtns[i].classList.add("correct");
        }
    }
    nextQuestionBtn.classList.remove("hide");
    nextQuestionBtn.addEventListener("click", nextQuestion);
}

/**
 * Increments the score when a correct answer is submitted.
 */
function incrementScore() {
    document.getElementById("score-count").innerHTML = ++lastScore;
}

/**
 * Loads the next question & increment the question count when "next question" button is clicked.
 * The button is then hidden until the user has answered the question.
 * The options buttons are enabled and the "correct/wrong" background colours are removed.
 */
function nextQuestion() {
    nextQuestionBtn.classList.add("hide");
    incrementCount++;
    currentCount.innerHTML = incrementCount;
    currentQuestion++;
    for (let i = 0; i < answerBtns.length; i++) {
        answerBtns[i].disabled = false;
        answerBtns[i].style.pointerEvents = "auto";
        answerBtns[i].classList.remove("correct")
        answerBtns[i].classList.remove("wrong")
    }
    displayQuestion()
} 

/**
 * When the burger icon is clicked it will change to a cross & the menu will be displayed.
 * All other pages will be hidden.
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
 * When home button in menu is clicked, displays the home page & hides the menu.
 */
 function showHome() {
    burger.classList.remove("change");
    menu.classList.add("hide");
    home.classList.remove("hide");
}

/**
 * When difficulty button in menu is clicked, displays the difficulty page & hides the menu.
 */
function showDifficultyMenu() {
    burger.classList.remove("change");
    menu.classList.add("hide");
    difficultyMenu.classList.remove("hide");
}

/**
 * When how to play button in menu is clicked, displays the how to play page & hides the menu.
 */
 function showHowTo() {
    burger.classList.remove("change");
    menu.classList.add("hide");
    howToMenu.classList.remove("hide");
}

/**
 * Reloads the site
 */
 function reload() {
    window.location.reload()
}