import {Howl} from 'howler'

import soundEffectOneSrc from './assets/game-over.mp3'

import backgroundMusicSrc from './assets/minecraft.mp3'

import soundEffectTwoSrc from './assets/ding.mp3'

const soundEffectOne = new Howl ({
    src:[soundEffectOneSrc],

    volume : 0.5
})

const backgroundMusic = new Howl ({
    src:[backgroundMusicSrc],
    autoplay:true, 
    loop: true,
    volume: 0.1
})


const soundEffectTWO = new Howl ({
    src:[soundEffectTwoSrc],

    volume : 0.5
})



let score = 0

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")

function updateScore(amount){
score += amount
 scoreDisplay.innerText = score.toFixed(0) + 'paw'
}

clicker.addEventListener("click", function(){
   let clickAmt= 1 + (paw ** 1.05)
 
   soundEffectOne.play()


    updateScore(clickAmt)
 })

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneScore = document.getElementById("upgradeOneCount")
let paw = 0 

 upgradeOne.addEventListener("click",function() {
if(score>=100){
   updateScore(-100)
   paw++
   upgradeOneCount.innerText = paw + "paw"
} else{
 alert ('you broke')
}
})

let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoScore = document.getElementById("upgradeTwoCount")
let boost = 0 

 upgradeTwo.addEventListener("click",function() {
if(score>=100){
   updateScore(-100)
   boost++
   upgradetwoCount.innerText = boost + "boost"
} else{
 alert ('you broke')
}
})
    
let upgradethree = document.getElementById("upgradeThree")
let upgradeThreeScore = document.getElementById("upgradeThreeCount")
let food  = 0 

 upgradeTwo.addEventListener("click",function() {
if(score>=100){
   updateScore(-100)
   food++
   upgradethreeCount.innerText = food + "food"
} else{
 alert ('you broke')
}
})
    


 

 function gameLoop(){
    let clickAmt= (paw ** 1.05)

    updateScore(clickAmt)
 }

 setInterval(gameLoop,1000)
