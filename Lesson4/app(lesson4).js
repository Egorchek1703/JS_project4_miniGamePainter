const board = document.querySelector('#board')
const squaresNumber = 500

function toBoard () {
    let randomWidth = Math.ceil(Math.random() * 800)
    if(randomWidth < 300) {
        randomWidth = 300
        board.style.width = `${randomWidth}px`
    }
    else{
        board.style.width = `${randomWidth}px`
    }

    
}
toBoard()

for (let i = 0; i < squaresNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', (event)=>{
        let randomColor = `rgb(${Math.ceil(Math.random()*249)}, ${Math.ceil(Math.random()*249)}, ${Math.ceil(Math.random()*249)})`
        event.target.style.background = randomColor
        event.target.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
    })
    square.addEventListener('mouseleave', (event)=>{
        setTimeout(()=>{
            event.target.style.background = 'white'
        }, 1000)
        setTimeout(()=>{
            event.target.style.boxShadow = '0 0 2px black'
        }, 2000)
    })
}