var Question = document.getElementById("question");
const questionElement = document.querySelector('.question');

var A1 = document.getElementById("A1");
var A2 = document.getElementById("A2");
var A3 = document.getElementById("A3");
var A4 = document.getElementById("A4");

let score = document.getElementById("score");
let lives = document.getElementById("lives");
let hint = document.getElementById("hint");

let Hint;
let Level = 0;
let Score = 0; // Start from 0 for scoring
let Hp = 3;

const questions = [
    {
        question: ".-- .... .- - / .. ... / .---- / .-.-. / ..... -----",
        answers: ["51", "..... .----", "Connect", "191.48"],
        correctAnswer: 1, // 0-based index for "..... .----"
        hint: "Morse Code"
    },
    {
        question: "var A1.textContent = correct",
        answers: ["string", "correct", "Uncaught ReferenceError:", "Correct"],
        correctAnswer: 2, // 0-based index for "correct"
        hint: "error"
    },
    {
        question: "hint",
        answers: ["...", "Morse Code", "Hint", "hint"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "..."
    },
    {
        question: "typeof()",
        answers: ["boolean", "string", "number", "nill"],
        correctAnswer: 1, // 0-based index for "hint"
        hint: "text"
    },
    {
        question: "value of pie",
        answers: ["3.14...", "7.21", "3.14159", "300"],
        correctAnswer: 1, // 0-based index for "hint"
        hint: "usd"
    },
    {
        question: "gumballs.length",
        answers: ["240", "4 seasons", "ongoing", "fully aired"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "episodes"
    },
    {
        question: "one piece.typeof()",
        answers: ["anime", "cartoon show", "movie", "Uncaught ReferenceError:"],
        correctAnswer: 3, // 0-based index for "hint"
        hint: "error"
    },
    {
        question: "if(i <= 100, I++;)",
        answers: ["100", "loop", "99", "101"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "number"
    },
    {
        question: "total number of questions",
        answers: ["10", "15", "75", "20"],
        correctAnswer: 3, // 0-based index for "hint"
        hint: "big"
    },
    {
        question: "proton",
        answers: ["positive", "electrivity", "moving", "molucule"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "positive"
    },
    {
        question: "proteins",
        answers: ["chicken", "meat", "egg", "fish"],
        correctAnswer: 2, // 0-based index for "hint"
        hint: "meat"
    },
    {
        question: "hottest form of lava",
        answers: ["800", "1200", "1470", "2190"],
        correctAnswer: 3, // 0-based index for "hint"
        hint: "farhenhit"
    },
    {
        question: "hottest form of white flame",
        answers: ["Deep red fire", "orange yellow fire", "white flame", "dazzling white flame"],
        correctAnswer: 3, // 0-based index for "hint"
        hint: "farhenhit"
    },
    {
        question: "black",
        answers: ["Dark", "255,255,255", "0,0,0", "outline"],
        correctAnswer: 2, // 0-based index for "hint"
        hint: "rgb color code"
    },
    {
        question: "if (10 <= 50){ answer = A1}",
        answers: ["A1", "A2", "A3", "A4"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "...."
    },
    {
        question: "I love pancakes",
        answers: ["ok", "rubbish", "undefined", "me too"],
        correctAnswer: 3, // 0-based index for "hint"
        hint: "me too"
    },
    {
        question: "which question is this",
        answers: ["16", "15", "16.5", "18"],
        correctAnswer: 1, // 0-based index for "hint"
        hint: "index logic"
    },
    {
        question: "",
        answers: ["", "", "click here", ""],
        correctAnswer: 2, // 0-based index for "hint"
        hint: "dont click"
    },
    {
        question: "what was the answer of the 10th question",
        answers: ["positive", "100", "Hint", "meat"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "dont click"
    },
    {
        question: "16-10=",
        answers: ["6", "Uncaught ReferenceError:", "26", "nill"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "subtraction"
    },
    {
        question: "19",
        answers: ["20", "-1 life", "+1 life", "game over"],
        correctAnswer: 0, // 0-based index for "hint"
        hint: "1+"
    },
    {
        question: "did you enjoy the game",
        answers: ["yes", "it was okay", "no", "mid"],
        correctAnswer: 2, // 0-based index for "hint"
        hint: "no"
    }
];

// Function to load the current question and answers
function loadQuestion() {
    Question.textContent = questions[Level].question;
    A1.textContent = questions[Level].answers[0];
    A2.textContent = questions[Level].answers[1];
    A3.textContent = questions[Level].answers[2];
    A4.textContent = questions[Level].answers[3];
}

// Load the first question
loadQuestion();

// Generic event listener function for all answer buttons
function checkAnswer(selectedAnswerIndex) {
    if (selectedAnswerIndex === questions[Level].correctAnswer) {
        Score++;
        score.textContent = Score;

        Level++;
        // Check if there are more questions
        if (Level < questions.length) {
            loadQuestion(); // Load the next question
        } else {
            // Handle the end of the quiz (optional)
            Question.textContent = "Quiz complete!";
            A1.style.display = "none"; // Hide buttons if desired
            A2.style.display = "none";
            A3.style.display = "none";
            A4.style.display = "none";
        }
    } else {
        Hp--;
        lives.textContent = Hp;
        questionElement.classList.add("animate-red");
        setTimeout(() => {
            questionElement.classList.remove("animate-red");
        }, 1000);

        if (Hp === 0) {
            Question.textContent = "Game Over!";
            // Hide buttons or perform other end game logic
            A1.style.display = "none";
            A2.style.display = "none";
            A3.style.display = "none";
            A4.style.display = "none";
        }
    }
}

// Event listeners for answer buttons
A1.addEventListener("click", () => checkAnswer(0));
A2.addEventListener("click", () => checkAnswer(1));
A3.addEventListener("click", () => checkAnswer(2));
A4.addEventListener("click", () => checkAnswer(3));
hint.addEventListener("click", () => hintgiver())