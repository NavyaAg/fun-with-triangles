var angles=document.querySelectorAll(".angles");
var button=document.querySelector(".check")
var message=document.querySelector("h2")

button.addEventListener("click",function isTriangle(){
    var sumOfangles=calculateSumOfAngles();
    console.log(sumOfangles)
    if(sumOfangles==180){
        message.innerText="A Triangle!"
    }
    else{
        message.innerText="Not A triangle"
    }
})

function calculateSumOfAngles(){
    var sum=0;
    angles.forEach((angle)=>{
    sum+=Number(angle.value)})
    return sum;
}