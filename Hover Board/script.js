"use strict"

let bodyEl = document.body 
let containerEl = document.querySelector(".container")
let colors = ['red','green','blue','purple']

for (let i = 0; i < 500; i++) {
    containerEl.innerHTML += `<div class="square"></div>`
}

let squares = document.querySelectorAll(".square")

let randomColor = () => {
    return  colors[Math.floor(Math.random() * colors.length)]
}
console.log(randomColor())

squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = `${randomColor()}`
    })
    square.addEventListener("mouseleave", () => {
        
       setInterval( () => {
        square.style.backgroundColor = "black"
       },1100 )

    })
})
