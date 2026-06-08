import { Howl } from 'howler'

import soundEffectOneSrc from './assets/beep.mp3'

import soundEffectTwoSrc from './assets/pay.mp3'

import backgroundMusicSrc from './assets/shopping.ogg'

import soundEffectThreeSrc from './assets/money.mp3'

const backgroundMusic = new Howl({
  src: [backgroundMusicSrc],
  autoplay: true,
  loop: true,
  volume: 0.1
})

const soundEffectOne = new Howl({
  src: [soundEffectOneSrc]
})

const soundEffectTwo = new Howl({
  src: [soundEffectTwoSrc]
})

const soundEffectThree = new Howl({
  src: [soundEffectThreeSrc]
}

)

let score = 0

let myBtn = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")

const formatter = new Intl.NumberFormat('en-US', {
  maxiumFractionDigits: 2,
  notation: 'compact',
  compactDisplay: 'short'
})
function updateScore(amount) {
  score += amount
  scoreDisplay.innerText = score + ' Cart Coins'
}

clicker.addEventListener("click", function () {
  let clickerAmt = 1 + (2 ** wheels)

  soundEffectOne.play()

  updateScore(clickerAmt)
})


let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let wheels = 0

upgradeOne.addEventListener("click", function () {

  if (score >= 100) {
    updateScore(-100)
    wheels++
    upgradeOneCount.innerText = wheels + " Wheels"
    soundEffectTwo.play()
  } else {
    alert('YOU Broke')
  }
  alert("clicked on upgrade one")

})

// let upgradeTwo = document.getElementById("upgradeTwo")
// let upgradeTwoCount = document.getElementById("upgradeTwoCount")


// upgradeTwo.addEventListener("click", function () {

//   if (score >= 100) {
//     updateScore(-100)
//     wheels++
//     upgradeTwoCount.innerText = wheels + " Wheels"
//     soundEffectTwo.play()
//   } else {
//     alert('YOU Broke')
//   }
//   alert("clicked on upgrade two")

// })

function gameLoop() {

  let clickerAmt = 1 + (2 ** wheels)



  updateScore(clickerAmt)
}

setInterval(gameLoop, 1000)



