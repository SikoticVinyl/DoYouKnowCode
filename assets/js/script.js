const QContainer = document.querySelector(".QContainer");
const qScore = document.querySelector(".Score");
const Timer = document.querySelector(".Timer");
const homePage = document.querySelector(".Home");
const quizQuestions = document.querySelector(".QuizQ");
const leaderboard = document.querySelector(".ScoreBoard");

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

let currentQ = 0;
let theScore = 0;
let time = 60;

function runQuiz() {

    for(let i = 0; i < QuizQs.length; i++){
        const questionDiv =document.createElement("div");
        const questionPara = document.createElement("p");
        questionPara.textContent = QuizQs[i].question;
        questionDiv.appendChild(questionPara);
        QContainer.appendChild(questionDiv);
    }
};

console.log(runQuiz());

runQuiz();

