// Global
var timer = 100;
var qnsIndex = 0;
var buttonEL = document.querySelector(".start");
var testTimer;

function timerFunction() {

    document.getElementById("timerDisplay").textContent = `Time remaining: ${timer}`;
     testTimer = setInterval(function () {
        if (timer <= 0) {
            document.getElementById("parent").setAttribute("hidden", "")
            quizBye();
        }
        timer--
        document.getElementById("timerDisplay").textContent = `Time remaining: ${timer}`
        console.log(timer)
    }, 1000)
    if (timer > 0) {

    }
}



// array of question objects

var qnAns = [{
        question: " What is the largest header tag?",
        answer: ["h1", "h2", "h3", "h4", "h5"],
        correctAns: "h1"
    },
    {
        question: " What language do you use to style your page?",
        answer: ["HTML", "CSS", "JavaScript", "JQuery", "React"],
        correctAns: "CSS"
    },
    {
        question: " How do you call on an ID?",
        answer: [".", "#", "&&", "+>", "<>"],
        correctAns: "#"
    },
    {
        question: "Which HTML tag is used to create a link?",
        answer: ["a", "p", "br", "span", "ul"],
        correctAns: "a"
    },
    {
        question: " Where is the metadata stored in a HTML file ",
        answer: ["footer", "head", "body", "header", "main"],
        correctAns: "head"
    },
]

function getAns() {
    console.log(qnsIndex)
    var divEL = document.getElementById("div-box")
    var ulEL = document.createElement("ul");
    ulEL.setAttribute("id", "question-answer-container")
    divEL.appendChild(ulEL)
    var titleElement = document.getElementById("Questions-title");
    var titleQuestion = qnAns[qnsIndex]
    var nextQuestionBtn = document.querySelector(".next-question");
    titleElement.textContent = titleQuestion.question;
    console.log(qnsIndex)
    for (var i = 0; i < qnAns[qnsIndex].answer.length; i++) {
        var listtEl = document.createElement("li")
        listtEl.textContent = qnAns[qnsIndex].answer[i];
        listtEl.setAttribute("onclick", "nextQuestion(event)")
        listtEl.className = "answer-question-container";
        document.getElementById("question-answer-container").appendChild(listtEl);
    }
    console.log(qnsIndex)
}

function nextQuestion(event) {


    var liEL = document.querySelector("#question-answer-container")
    liEL.remove()
    if (qnsIndex >= qnAns.length - 1) {
        if (event.target.textContent == qnAns[qnsIndex].correctAns) {
            
        } else {
            timer -= 10
        }
        return quizBye()
     
        startQuiz()
    } else {
        if (event.target.textContent == qnAns[qnsIndex].correctAns) {
            
        } else {
            timer -= 10
        }
        qnsIndex++;
        getAns();
    }




}

function quizScores() {
    var localArray = Object.entries(localStorage)
    console.log(localArray)
    localArray.forEach((element) =>{
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var tr = document.createElement("tr")
        td1.textContent = element[0]
        td2.textContent = element[1]
        console.log(td1)
        console.log(td2)
        tr.appendChild(td1)
        tr.appendChild(td2)
        document.getElementById("listed").appendChild(tr);
        console.log(element[0], element[1])
    })
    
}

function submitScore() {
    console.log(document.getElementById("initials").value.score)
    var initials = document.getElementById("initials").value
    var points = score
    localStorage.setItem(initials, points)
    quizScores()
}

function quizBye() {
    var highContainer = document.getElementById("score")
    clearInterval(testTimer)
    score = timer;
    highContainer.textContent =score;
    document.getElementById("timerDisplay").setAttribute("hidden","");
    document.getElementById("parent").setAttribute("hidden", "");
    document.getElementById("Questions-title").setAttribute("hidden", "")
    document.getElementById("div-box").setAttribute("hidden", "")
    document.getElementById("highContainer").classList.remove("hide")

}

function startQuiz() {

    buttonEL.classList.remove("class");
    buttonEL.setAttribute("class", "next-question");
    buttonEL.setAttribute("onCLick", "nextQuestion(event)");
    var startingGame = document.getElementById("gameStart");
    startingGame.setAttribute("hidden", "");
    getAns();

}

document.querySelector(".start").addEventListener("click", function () {
    if (timer === 100) {
        timerFunction()
        startQuiz()
    } else {
        startQuiz()
    }
});
