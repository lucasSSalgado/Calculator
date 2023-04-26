// number 
const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine]

// operations
const showing = document.getElementById('showing')

const ac = document.getElementById('ac')
const sinal = document.getElementById('sinal')
const invert = document.getElementById('invert')
const division = document.getElementById('division')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const point = document.getElementById('point')
const igual = document.getElementById('igual')

// variables
let firstNumber = '';
let secondNumber = '';
let operation;

// show the number in display
function showNumber() {
    showing.style.textAlign = 'right'
    showing.textContent = firstNumber 
}

// clean all variables
ac.addEventListener('click', () => {
    firstNumber = ''
    secondNumber = ''
    operation = undefined
})

// change sinal of the current number
sinal.addEventListener('click', () => {
    if (operation === undefined) {
        firstNumber = parseFloat(firstNumber) * -1
    }
    else {
        secondNumber = parseFloat(secondNumber) * -1
    }
})

// invert operation 1 / x 
invert.addEventListener('click', () => {
    if (operation === undefined) {
        firstNumber = 1 / parseFloat(firstNumber)
    }
    else {
        secondNumber = 1 / parseFloat(secondNumber)
    }
})

// division 
division.addEventListener('click', () => operation = 'division')

// multiplication
multiply.addEventListener('click', () => operation = 'multiply')

// minus
minus.addEventListener('click', () => operation = 'minus')

// plus
plus.addEventListener('click', () => operation = 'plus')

// point
point.addEventListener('click', () => {
    
})

// store the numbers when display is clicked
function mapNumbers() {
    for (let i = 0; i < 10; i++) {
        numbers[i].addEventListener('click', () => {
            console.log('entrou')
            if (operation === undefined) {
                firstNumber += i
            }
            else {
                secondNumber += i
            }
        })
    }    
}

igual.addEventListener('click', () => {
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(operation)
    showNumber()
})

mapNumbers()