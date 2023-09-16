const QContainer = document.getElementsByClassName("QContainer");
const qScore = document.getElementsByClassName("Score");
const Timer = document.getElementsByClassName("Timer");
const homePage = document.getElementsByClassName("Home");
const quizQuestions = document.getElementsByClassName("QuizQ");
const leaderboard = document.getElementsByClassName("ScoreBoard");

const QuizQs = [
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: ["getElementbyId()", "getElementsByName()", "getElementsbyElement()",],
        correctAnswer: "getElementbyId()"
    },

    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: ["get", "set", "let"],
        correctAnswer: "let"
    },

    {
        question: "What function is used to convert a JSON object into string format?",
        answers: ["parse()", "stringit()", "stringify()",],
        correctAnswer: "stringify()"
    },

    {
        question: "How do you write a comment in javascript?",
        answers: ["<!-- -->", "/* */", "//",],
        correctAnswer: "//"
    },
];

function runQuiz() {
    for(let i = 0; i < QuizQs.length; i++){
        const questionDiv =document.createElement("div");
        const questionPara = document.createElement("p");
        questionPara.textContent = QuizQs[i].questions;
        questionDiv.appendChild(questionPara);
    }
};

console.log(runQuiz());

