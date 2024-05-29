const questions= [
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},

        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},

        ]
    },
    {
        question:"Which is the largest state in the world in terms of area?",
        answers:[
            {text:"Rajasthan",correct:true},
            {text:"maharastra",correct:true},
            {text:"Karnataka",correct:false},
            {text:"Madhya Pradesh",correct:false},

        ]
    },
    {
        question:"Which is the largest fort in india?",
        answers:[
            {text:"Agra fort",correct:false},
            {text:"Amer fort",correct:true},
            {text:"kumblargh fort",correct:false},
            {text:"Chittorgarh fort",correct:true},

        ]
    },
]
const questionElement=document.getElementById("question");
const answerButttons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButttons.firstChild){
        answerButttons.removeChild(answerButttons.firstChild)
    }
}
 function selectAnswer (e){
    const selectedBtn=e.target
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    });
    nextButton.style.display="block"
 }
 function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of
    ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
 }
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click",()=>{
if(currentQuestionIndex<questions.length){
    handleNextButton()
}else{
    startQuiz()
}
 })

startQuiz()