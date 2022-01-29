var requests = document.querySelectorAll(".request");
var requestBtns = document.querySelectorAll(".request-btns");
var requestCounter = document.getElementById("request-alert");
var connectionCounter = document.getElementById("connections-alert");

function changeName(){
    document.querySelector(".userName").innerHTML = "Doe Jane";
}

for(var i = 0; i< requestBtns.length; i ++){
    requestBtns[i].addEventListener("click", function(i){
        var btn = Math.floor(i/2);
        var requestBtn = requestBtns[btn];
        var request = requests[btn];
        
        if(requestBtn.classList.contains('confirm')){
            connectionCounter.innerHTML ++;
        }

        request.style.display ="none";
        requestCounter.innerHTML --;
    }.bind(null, i));
}

