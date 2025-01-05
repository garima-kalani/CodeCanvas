const questions=[
    {
        question:"The height of a BST is given as h. Consider the height of the tree as the no. of edges in the longest path from root to the leaf. The maximum no. of nodes possible in the tree is?",
        answers:[
            {text:"2^(h-1) -1", correct:"false"},
            {text:"2^(h+1) -1", correct:"true"},
            {text:"2^(h +1)", correct:"false"},
            {text:"2^(h-1) +1", correct:"false"},
        ]
    },
    {
        question:"The difference between the external path length and the internal path length of a binary tree with n internal nodes is?",
        answers:[
            {text:"1", correct:"false"},
            {text:"n", correct:"true"},
            {text:"n+1", correct:"false"},
            {text:"2n", correct:"false"},
        ]
    },
    {
        question:"Which type of traversal of binary search tree outputs the value in sorted order?",
        answers:[
            {text:"Pre-order", correct:"false"},
            {text:"In-order", correct:"true"},
            {text:"Post-order", correct:"false"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"If a node having two children is to be deleted from binary search tree, it is replaced by its",
        answers:[
            {text:"In-order predecessor", correct:"false"},
            {text:"In-order successor", correct:"true"},
            {text:"Pre-order predecessor", correct:"false"},
            {text:"None", correct:"false"},
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