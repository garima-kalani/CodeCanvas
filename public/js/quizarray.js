const questions=[
    {
        question:"Which of the following parenthesis are used while initialization of array ?",
        answers:[
            {text:"[ ]", correct:"false"},
            {text:"{ }", correct:"true"},
            {text:"( )", correct:"false"},
            {text:"none", correct:"false"},
        ]
    },
    {
        question:"Which of the following is valid for declaration of float type array of 10 elements?",
        answers:[
            {text:"float arr[10];", correct:"true"},
            {text:"float arr(10);", correct:"false"},
            {text:"float arr{10};", correct:"false"},
            {text:"float arr<10>;", correct:"false"},
        ]
    },
    {
        question:"Array index starts with",
        answers:[
            {text:"0", correct:"true"},
            {text:"1", correct:"false"},
            {text:"2", correct:"false"},
            {text:"4", correct:"false"},
        ]
    },
    {
        question:"Objects in a sequence that have the same type, is called",
        answers:[
            {text:"Functions", correct:"false"},
            {text:"Operators", correct:"false"},
            {text:"Arrays", correct:"true"},
            {text:"Stacks", correct:"false"},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
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
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();


// let currentQuestionIndex = 0;
// let score = 0;

// const questionElement = document.getElementById('question');
// const optionsElement = document.getElementById('options');
// const scoreElement = document.getElementById('score');

// function displayQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     optionsElement.innerHTML = '';

//     currentQuestion.options.forEach((option, index) => {
//         const button = document.createElement('button');
//         button.textContent = option;
//         button.addEventListener('click', () => checkAnswer(option));
//         optionsElement.appendChild(button);
//     });
// }

// function checkAnswer(selectedOption) {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedOption === currentQuestion.answer) {
//         score++;
//     }

//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {
//         displayQuestion();
//     } else {
//         showResult();
//     }
// }

// function showResult() {
//     questionElement.textContent = 'Quiz Completed!';
//     optionsElement.innerHTML = '';
//     scoreElement.textContent = Your Score: ${score} / ${questions.length};
// }

// displayQuestion();