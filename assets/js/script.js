const QContainer = document.getElementsByClassName("QContainer");
const qScore = document.getElementsByClassName("Score");
const Timer = document.getElementsByClassName("Timer");
const homePage = documnet.getElementsByClassName("Home");
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

