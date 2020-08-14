/*----- constants -----*/
/*----- app's state (variables) -----*/
let runninTotal = 0;

/*----- cached element references -----*/
let totalEl = document.getElementById('totalH1')
let plusEl = document.getElementById('plus')
let minusEl = document.getElementById('minus')
let inputEl = document.getElementById('inputBx')

/*----- functions -----*/
const init = () => {
    totalEl.textContent = '0'
    inputEl.value = '1'
}

const handlePlus = () => {
    let newVal = parseInt(inputEl.value)
    runninTotal += newVal
    render()
}

const handleMinus = () => {
    let newVal = parseInt(inputEl.value)
    runninTotal -= newVal
    render()
}

const render = () => {
    if (runninTotal >= 0) {
        totalEl.style.color = 'black'
        totalEl.innerText = runninTotal
    } else if (runninTotal < 0) {
        totalEl.style.color = 'red'
        totalEl.innerText = runninTotal
    }
}

init()

/*----- event listeners -----*/
plusEl.addEventListener('click', handlePlus)
minusEl.addEventListener('click', handleMinus)