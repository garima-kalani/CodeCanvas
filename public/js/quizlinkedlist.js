const questions=[
    {
        question:"Which of the following information is stored in a doubly-linked list’s nodes?",
        answers:[
            {text:"Value of node", correct:"false"},
            {text:"Address of previous node", correct:"false"},
            {text:"Address of next node", correct:"false"},
            {text:"All of the above", correct:"true"},
        ]
    },
    {
        question:"Which of the following operations is performed more efficiently by doubly linked list than by singly linked list?",
        answers:[
            {text:"Deleting a node whose location in given", correct:"true"},
            {text:"Searching of an unsorted list for a given item", correct:"false"},
            {text:"Inverting a node after the node with given location", correct:"false"},
            {text:"Traversing a list to process each node", correct:"false"},
        ]
    },
    {
        question:"Consider an implementation of unsorted singly linked list. Suppose it has its representation with a head pointer only. Given the representation, which of the following operation can be implemented in O(1) time?",
        answers:[
            {text:"Insertion at the front of the linked list", correct:"true"},
            {text:"Insertion at the end of the linked list", correct:"false"},
            {text:"Deletion of the last node of the linked list", correct:"false"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"In linked list each node contain minimum of two fields. One field is data field to store the data second field is?",
        answers:[
            {text:"Pointer to character", correct:"false"},
            {text:"Pointer to integer", correct:"false"},
            {text:"Pointer to node", correct:"true"},
            {text:"Node", correct:"false"},
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