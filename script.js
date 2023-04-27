// numbers  
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
// get all buttons
const ac = document.getElementById('ac')
const sinal = document.getElementById('sinal')
const invert = document.getElementById('invert')
const divisionSymbol = document.getElementById('division')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const point = document.getElementById('point')
const igual = document.getElementById('igual')
// variables use in calcs
let firstNumber = ''
let secondNumber = ''
let operation
let result = null
////////////////////////// MATH FUNCTIONS //////////////////////////////
// clean all variables
ac.addEventListener('click', () => {
    cleanVariables()
    clearDisplay()  
})
// change sinal of the current number
sinal.addEventListener('click', () => {
    if (result !== null) {
        repeat()
        operation = undefined
        firstNumber = parseFloat(firstNumber) * -1
        showNumber()
        return
    }
    if (operation === undefined) {
        firstNumber = parseFloat(firstNumber) * -1
    }
    else {
        secondNumber = parseFloat(secondNumber) * -1
    }
    showNumber()
    })
// INVERT number 1 / x 
invert.addEventListener('click', () => {
    if (result !== null) {
        result = 1 / parseFloat(result)
        operation = undefined
        repeat()        
        showNumber()
        return
    }

    if (operation === undefined) {
        firstNumber = 1 / parseFloat(firstNumber)
    }
    else {
        secondNumber = 1 / parseFloat(secondNumber)
    }
    showNumber()
})
// DIVISION 
divisionSymbol.addEventListener('click', () => {
    if (result !== null) { 
        repeat()
    }
    operation = '/'
    showNumber()  
})
// MULTIPLICATION 
multiply.addEventListener('click', () => {
    if (result !== null) {
        repeat()
    }
    operation = 'X'
    showNumber()   
})
// MINUS 
minus.addEventListener('click', () => {
    if (result !== null) {
        repeat()
    }
    operation = '-'
    showNumber()    
})
// PLUS
plus.addEventListener('click', () => {
    if (result !== null) {
        repeat()
    }
    operation = '+'
    showNumber()
})
// Add a point if it not exist yet calling thereIsPoint()
point.addEventListener('click', () => {
    let point = thereIsPoint()
    if (operation === undefined && point === false && firstNumber.length !== 0) {
        firstNumber += '.'
        showNumber()
    } 
    else if (operation === undefined && point === false && firstNumber.length === 0) {
        firstNumber += '0.'
        showNumber()
    }
    else if (operation !== undefined && point === false && secondNumber.length !== 0) {
        secondNumber += '.'
        showNumber()
    }  
    else if (operation !== undefined && point === false && secondNumber.length === 0)  {
        secondNumber += '0.'
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
            division()
            break
        case 'X':
            multiplication()
            break
        case '-':
            subtration()
            break
        case '+':
            addition()
            break    
        default:
            break
    }
})
/////////////////////////// CALCULATIONS //////////////////////////////
function division() {
    if (secondNumber == 0) {
        showing.innerText = 'Black holes are where God divided by zero - Albert Einstein'
        showing.style.fontSize = '2.2rem'
        showing.style.fontFamily = 'cursive'
        return
    } 
    result = parseFloat(firstNumber) / parseFloat(secondNumber)
    showNumber()
}
function multiplication() {
    result = parseFloat(firstNumber) * parseFloat(secondNumber)
    showNumber()
}
function subtration() {
    result = parseFloat(firstNumber) - parseFloat(secondNumber)
    showNumber()
}
function addition() {
    result = parseFloat(firstNumber) + parseFloat(secondNumber)
    showNumber()
}
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
// permit the continuous calcs
function repeat() {
    firstNumber = result
    result = null
    secondNumber = ''
}
// store the numbers when display is clicked and start the app
function mapNumbers() {
    for (let i = 0; i < 10; i++) {
        numbers[i].addEventListener('click', () => {
            if (result === null) {
                if (operation === undefined) {
                    firstNumber += String(i)
                }
                else {
                    secondNumber += String(i)
                }
                showNumber()
            }
            else {
                cleanVariables()
                firstNumber += String(i)
                showNumber()
            }            
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
        showing.innerText =  result
    }   
    console.log(firstNumber, secondNumber, operation, result)     
}
function clearDisplay() {
    showing.innerText = 0
}
function cleanVariables() {
    firstNumber = ''
    secondNumber = ''
    operation = undefined
    result = null
}
mapNumbers()