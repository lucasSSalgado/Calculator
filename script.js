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
showing.style.textAlign = 'right'
showing.style.fontSize = '3rem'

const ac = document.getElementById('ac')
const sinal = document.getElementById('sinal')
const invert = document.getElementById('invert')
const division = document.getElementById('division')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const point = document.getElementById('point')
const igual = document.getElementById('igual')

// develop variable
const refresh = document.getElementById('refresh')

// variables
let firstNumber = ''
let secondNumber = ''
let operation
let result = null

////////////////////////// MATH FUNCTIONS //////////////////////////////
// clean all variables
ac.addEventListener('click', () => {
    firstNumber = ''
    secondNumber = ''
    operation = undefined
    result = null
    showNumber()    
})
// change sinal of the current number
sinal.addEventListener('click', () => {
    if (operation === undefined) {
        firstNumber = parseFloat(firstNumber) * -1
    }
    else {
        secondNumber = parseFloat(secondNumber) * -1
    }
    showNumber()
})
// invert number 1 / x 
invert.addEventListener('click', () => {
    if (operation === undefined) {
        firstNumber = 1 / parseFloat(firstNumber)
    }
    else {
        secondNumber = 1 / parseFloat(secondNumber)
    }
    showNumber()
})
// save operator has division 
division.addEventListener('click', () => {
    operation ='/'
    showNumber()
})
//  save operator hasmultiplication
multiply.addEventListener('click', () => {
    operation = 'X'
    showNumber()
})
// save operator has minus
minus.addEventListener('click', () => {
    operation = '-'
    showNumber()
})
// save operator has plus
plus.addEventListener('click', () => {
    operation = '+'
    showNumber()
})
// Add a point if it not exist yet calling thereIsPoint()
point.addEventListener('click', () => {
    let point = thereIsPoint()
    if (operation === undefined && point === false) {
        firstNumber += '.'
        showNumber()
    } 
    else if (operation !== undefined && point === false) {
        secondNumber += '.'
        showNumber()
    }    
    else {
        return
    }
})
// make operation when click
igual.addEventListener('click', () => {
    // test if every thing ready
    if (firstNumber === '' || secondNumber === '' || operation === undefined) return

    switch (operation) {
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber)
            showNumber()
            break
        case 'X':
            result = parseFloat(firstNumber) * parseFloat(secondNumber)
            showNumber()
            break
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber)
            showNumber()
            break
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber)
            showNumber()
            break    
        default:
            break
    }
})

//////////////// UTILITIES //////////////////////////////////
// search of a point in the array
function thereIsPoint() {
    if (operation === undefined) {
        for (let i = 0; i < firstNumber.length; i++) {
            if (firstNumber[i] === '.') return true
        }
    } 
    else {
        for (let i = 0; i < secondNumber.length; i++) {
            if (secondNumber[i] === '.') return true
        }
    }
    return false
}
// store the numbers when display is clicked and start the app
function mapNumbers() {
    for (let i = 0; i < 10; i++) {
        numbers[i].addEventListener('click', () => {
            if (operation === undefined) {
                firstNumber += i
            }
            else {
                secondNumber += i
            }
            showNumber()
        })
    }    
}
// show the number in display
function showNumber() {
    if (result === null) {
        if(operation === undefined) {
            showing.innerText = firstNumber
        }
        else {
            showing.innerText = firstNumber + ' ' + operation + ' ' + secondNumber
        }

    }
    else {
        showing.innerText =  result.toFixed(2)
    }    
}

mapNumbers()