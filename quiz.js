var quizForm=document.querySelector(".quiz-form");
var submit=document.querySelector("#btn-submit");
var output=document.querySelector(".msg-score");

const ans=["45°","no","a + b + c","Equilateral trian","one right angle"];

function calculateScoreOf(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);
    console.log(formResults)

    for(const answers of formResults.values()){
        console.log(answers)
    })


}

submit.addEventListener("click",calculateScoreOf);