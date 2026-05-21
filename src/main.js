let score = 0

let myBtn = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")
clicker.addEventListener("click", function () {
 score++
 console.log(score)

 scoreDisplay.innerText = score
})

