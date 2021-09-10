var quizForm=document.querySelector(".quiz-form");
var submit=document.querySelector("#btn-submit");
var output=document.querySelector(".msg-score");

const ans=["45°","no","a + b + c","Equilateral triangle","one right angle"];

function calculateScoreOf(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);

    for(const answers of formResults.values()){
        console.log(answers)
        if(answers===ans[index]){
            score+=1;
        }
        index+=1;
    }
    output.innerText="You scored "+ score;

}

submit.addEventListener("click",calculateScoreOf);