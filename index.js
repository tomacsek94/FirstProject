// document.getElementById("count").innerText=5



//count +1
// count = count + 2

// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints+50
// console.log(bonusPoints)

// bonusPoints = bonusPoints-75
// console.log(bonusPoints)

// bonusPoints = bonusPoints+45
// console.log(bonusPoints)

 function increment () {
     console.log("The button was clicked")
}


function countdown (){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()
countdown()

function active(){
    console.log(42)
}

active()

let lap1 = 34
let lap2 = 33
let lap3 = 36


function logLapTime() {
    let totalTime=lap1+lap2+lap3
    console.log(totalTime)
}

logLapTime()


let lapsCompleted=0

function incrementLap(){
    lapsCompleted=lapsCompleted+1
    
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)




let saveEl=document.getElementById('save-el')
let countEl=document.getElementById("count-el")
console.log(countEl)

let count=0


function increment() { 
    count += 1
    countEl.textContent=count
}

function save() {
    let preEntires=count + "-"
    saveEl.textContent += preEntires
    countEl.textContent= 0
    count=0
}

