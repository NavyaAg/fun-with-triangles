var sides=document.querySelectorAll(".sides");
var calculate=document.querySelector(".calculate")
var message=document.querySelector("h2")

calculate.addEventListener("click",function calculateHypotenuse(){
    var sum=0;
    sides.forEach((side)=>{
        sum+=(side.value)*(side.value);
    })
    message.innerText="hypotenuse is"+ Math.sqrt(sum);
})