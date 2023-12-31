const QContainer = document.querySelector(".QContainer");
const qScore = document.querySelector(".Score");
const Timer = document.querySelector(".Timer");
const quizQuestions = document.querySelector(".QuizQ");
const startButton = document.querySelector("#StartBTN");
const hideStart = document.querySelector("#StartHide");
const hideEnd = document.querySelector(".endPage");
const qhide = document.querySelector(".qhide");

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
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<link>","<script>","<body>"],
        correctAnswer: "<script>"
    },

    {
        question: "How do you write an IF statement in JavaScript?",
        answers: ["if i=4", "if i === 2 {return}", "if(i=3)"],
        correctAnswer: "if(i=3)"
    },

    {
        question: "Which of the following is a correct FOR loop?",
        answers: ["for i = i++", "for(i=0; i++)", "for(i=0, i < element.lenght; i++)",],
        correctAnswer: "for(i=0, i < element.lenght; i++"
    },

    {
        question: "JavaScript is the same as Java.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },

    {
        question: "How can a datatype be declared to be a constant type?",
        answers: ["const", "var", "let",],
        correctAnswer: "const"
    },

    {
        question: "What is the proper way to connect HTML elements to JavaScript?",
        answers: ["document.innerHTML.getElementById(...)", "window.getElementById(...)", "document.getElementById(...)"],
        correctAnswer: "document.getElementById(...)"
    },

    {
        question: "What does preventDefault(); do?",
        answers: ["Stops the execution of a function.", "Halts the browser completely.", "Prevents the default behavior of an event."],
        correctAnswer: "Prevents the default behavior of an event."
    },
];

let currentQindex = 0;
let theScoreindex = 0;
let scoreInterval;
let timeIndex = 60;
let timerInterval;

hideEnd.style.display = "none";
qhide.style.display = "none";
startButton.addEventListener("click", startQ);


function startQ() {
    theScoreindex = 0;
    qScore.textContent = "Score: " + theScoreindex;
    StartTimer();
    ShowQuestions();
    hideStart.style.display = "none";
    qhide.style.display = "block";
}

function StartTimer(){
    timerInterval = setInterval(function (){
        timeIndex--;

        Timer.textContent= "Time left: " + timeIndex;


        if (timeIndex <= 0){
            endQ();
        }
    }, 1000);
}

function ShowQuestions() {
    
    if (currentQindex < QuizQs.length){
    const currentQ = QuizQs[currentQindex]

    const questionDiv =document.createElement("div");
    const questionPara = document.createElement("p");
    questionPara.textContent =currentQ.question;
    questionDiv.appendChild(questionPara);
    QContainer.appendChild(questionDiv);

    for (let i=0; i < currentQ.answers.length; i++){
        const AnswersBTN = document.createElement("button");
        AnswersBTN.textContent = currentQ.answers[i];

        let selectedAnswer=currentQ.answers[i]
        AnswersBTN.addEventListener("click", function (){
            doAnswerSelect(selectedAnswer);
        });
        AnswersBTN.classList.add("btn", "btn-info", "mx-2", "mb-3", "btn-outline-dark" );
        questionPara.classList.add("mt-2");
        questionDiv.appendChild(AnswersBTN);
    };
} else {
    endQ();
};
};

function doAnswerSelect(selectedAnswer) {
    const currentQuestion = QuizQs[currentQindex];
    
    currentQindex++;
    QContainer.innerHTML="";
    ShowQuestions();

    if (selectedAnswer === currentQuestion.correctAnswer) {
        theScoreindex++;
    } else {
        timeIndex -= 10;
    }

    qScore.textContent = "Score: " + theScoreindex;
}

const LB = document.querySelector(".LeaderBoar");
const listLB = document.querySelector(".lbList")
const formLB = document.querySelector(".lbForm");
const Names = document.querySelector("#name");
const SubBTN = document.querySelector("#subBTN");

let lbEntries = [];

SubBTN.addEventListener("click", submitScore);

function submitScore(event) {
    event.preventDefault();
    const userName = Names.value;
    if (userName && theScoreindex > 0){
        const entry = {
            name: userName,
            score: theScoreindex,
            time: 60 - timeIndex,
        };
        lbEntries.push(entry);
        showLeaders();
        formLB.style.display="none";
    } else {
        alert("No score to record. Please try the Quiz again!");
    }
};

const localStorageKey = "leaderboardData"

window.addEventListener("load", function(){
    const savedData = localStorage.getItem("leaderboardData");

    if(savedData){
        lbEntries = JSON.parse(savedData);
        showLeaders();
    }
});


function showLeaders() {
    listLB.innerHTML=""
    lbEntries.sort(function(a,b){
        return b.score - a.score;
    });
    for(let i=0; i<lbEntries.length; i++){
        const entry = lbEntries[i];
        const listEntry = document.createElement("li");

        listEntry.textContent= "#"+(i+1)+" - "+entry.name+": Score - "+entry.score+", Time completed: "+entry.time+"s";
        listLB.appendChild(listEntry);
    }
    localStorage.setItem("leaderboardData", JSON.stringify(lbEntries));
};

function endQ() {
    clearInterval(timerInterval);
    hideEnd.style.display = "block";
    qScore.style.display = "none";
    Timer.style.display = "none";
    QContainer.innerHTML="";
    qhide.style.display = "none";
    showLeaders();
};