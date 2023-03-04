const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const counter = document.getElementById("counter");
var countertext;

function decrease(){
    countertext = counter.innerText;
    countertext = parseInt(countertext);
    countertext -= 1;
    countertext = countertext.toString();
    counter.innerText = countertext;
}

function increase(){
    countertext = counter.innerText;
    countertext = parseInt(countertext);
    countertext += 1;
    countertext = countertext.toString();
    counter.innerText = countertext;
}

function reset(){
    counter.innerText = "0";
}

function changeColor(){
    if (parseInt(counter.innerText) > 0) {
        counter.style.color = 'green';
    }

    else if (parseInt(counter.innerText) < 0) {
        counter.style.color = 'red';
    }

    else if (parseInt(counter.innerText) == 0) {
        counter.style.color = 'white';
    }
}

decreasebtn.addEventListener("click", decrease);
resetbtn.addEventListener("click", reset);
increasebtn.addEventListener("click", increase);
setInterval(changeColor, 1);