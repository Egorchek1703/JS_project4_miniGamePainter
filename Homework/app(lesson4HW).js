const board = document.querySelector('#board')
const maxSquareNumbers = 700

for(let i = 0; i < maxSquareNumbers; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', (event)=>{
        let randomColor = `rgb(${Math.ceil(Math.random()*250)}, ${Math.ceil(Math.random()*250)}, ${Math.ceil(Math.random()*250)})`
        event.target.style.background = randomColor
        event.target.style.boxShadow = `0 0 10px ${randomColor}`
    })
    square.addEventListener('mouseleave', (event)=>{
        setTimeout(()=>{
            event.target.style.background = 'white'
            event.target.style.boxShadow = `0 0 2px black`
        }, 3000)
    })
}


