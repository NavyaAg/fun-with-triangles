var sides=document.querySelectorAll(".sides");
var calculate=document.querySelector(".calculate")
var message=document.querySelector("h2")

calculate.addEventListener("click",function calculateArea(){
    var product=1;
    sides.forEach((side)=>{
        product*=(side.value);
    })
    message.innerText="area is "+ (0.5*product) + " cm²";
})