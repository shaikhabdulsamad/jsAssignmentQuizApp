let point = sessionStorage.getItem("points");

document.querySelector(".points").innerHTML = point

var passFail = document.getElementById("passFail");
var icon = document.getElementById("icon")

if(point >= 70){
    icon.src = "images/trophy-solid.svg"
    passFail.innerText = "Wow you are Pass"
}else{
    
    icon.src = "images/frown-regular.svg"
    passFail.innerText = "Sorry you are fail"
}

function back(){
    location.href ="quiz.html";
}