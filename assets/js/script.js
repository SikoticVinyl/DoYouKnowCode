const QContainer = document.querySelector(".QContainer");
const qScore = document.querySelector(".Score");
const Timer = document.querySelector(".Timer");
const quizQuestions = document.querySelector(".QuizQ");
const startButton = document.querySelector("#StartBTN");
const hideStart = document.querySelector("#StartHide");
const hideEnd = document.querySelector(".endPage");

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
let scoreInterval;
let timeIndex = 60;
let timerInterval;

hideEnd.style.display = "none";
startButton.addEventListener("click", startQ);


function startQ() {
    theScoreindex = 0;
    qScore.textContent = "Score: " + theScoreindex;
    StartTimer();
    ShowQuestions();
    hideStart.style.display = "none";
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
        questionDiv.appendChild(AnswersBTN);
    };
} else {
    endQ();
};
};

function doAnswerSelect(selectedAnswer) {
    const currentQuestion = QuizQs[currentQindex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        theScoreindex++;
        currentQindex++;
        QContainer.innerHTML="";
        ShowQuestions();
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

const lbEntries = [];

SubBTN.addEventListener("click", submitScore);

function submitScore() {
    const userName = Names.value;
    if (userName && theScoreindex > 0){
        const entry = {
            name: userName,
            score: theScoreindex,
            time: 60 - timeIndex,
        };
        lbEntries.push(entry);
        showLeaders();
    }
};

function showLeaders() {
    listLB.innerHTML=""
    lbEntries.sort(function(a,b){
        return b.score - a.score;
    });
    for(let i=0; i<lbEntries.length; i++){
        const entry = lbEntries[i];
        const listEntry = document.createElement("li");

        listEntry.textcontent= "#"+(i+1)+" - "+entry.name+": Score - "+entry.score+", Time completed: "+entry.time+"s";
        listLB.appendChild(listEntry);
    }
};

function endQ() {
    clearInterval(timerInterval);
    hideEnd.style.display = "block";
    qScore.style.display = "none";
    Timer.style.display = "none";
    showLeaders();
};