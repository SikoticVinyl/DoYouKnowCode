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

let currentQindex = 0;
let theScoreindex = 0;
let timeIndex = 60;

function ShowQuestions() {
    const currentQ = QuizQs[currentQindex]

    const questionDiv =document.createElement("div");
    const questionPara = document.createElement("p");
    questionPara.textContent =currentQ.question;
    questionDiv.appendChild(questionPara);
    QContainer.appendChild(questionDiv);

    for (let i=0; i < currentQ.answers.length; i++){
        const AnswersBTN = document.createElement("button");
        AnswersBTN.textContent = currentQ.answers[i];
        AnswersBTN.addEventListener("click", function (){
            doAnswerSelect(currentQ.answers[i]);
        });
        questionDiv.appendChild(AnswersBTN);
    }
};

function doAnswerSelect(selectedAnswer) {
    const currentQuestion = QuizQs[currentQindex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        theScoreindex++
    } else if (selectedAnswer !== currentQuestion.correctAnswer){
        timeIndex -= 10;
    }
}
