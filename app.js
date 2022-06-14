let congratDiv = document.querySelector(".congrat")
let numberWords = ["one","two","three","four","five","six"]
let diCont = document.querySelector(".di-cont")
let rollBtn = document.querySelector(".rollbtn");

rollBtn.addEventListener("click", function(){

    diCont.textContent= "";

let diceNumber = Math.floor(Math.random() * 6);
console.log(diceNumber);
if (diceNumber == 5){
    congratDiv.style.display = "block";
}
else{
    congratDiv.style.display = "none";
}

let currentDi = numberWords[diceNumber]

let di = document.createElement("i")

di.classList.add("dice","fas",`fa-dice-${currentDi}`)
diCont.appendChild(di)

})