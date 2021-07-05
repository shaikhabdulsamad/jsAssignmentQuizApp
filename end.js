let point = sessionStorage.getItem("points");

document.querySelector(".points").innerHTML = point

var passFail = document.getElementById("passFail");
if(point > 70){
    passFail.innerHTML = "Wow you are Pass"
}else{
    passFail.innerHTML = "Sorry you are fail"
}

