
const learn=document.getElementsByClassName("learn")[0];

learn.addEventListener("click", function(){
    window.location.assign("http://localhost:8080/learn");
});

const practice=document.getElementsByClassName("prac")[0];

practice.addEventListener("click", function(){
    window.location.assign("http://localhost:8080/practice");
});

const test=document.getElementsByClassName("test")[0];

test.addEventListener("click", function(){
    window.location.assign("http://localhost:8080/test");
});

