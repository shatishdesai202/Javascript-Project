let pScore = 0;
let cScore = 0;
let choice = document.querySelectorAll('.choice')

let ps = document.getElementById('ps')
let cs = document.getElementById('cs')

let restart = document.getElementById('restart')
restart.addEventListener('click', restartFun)
let psco = document.getElementById('psco')
let csco = document.getElementById('csco')
let pos = document.getElementById('pos')

psco.style.backgroundColor = "orange"
csco.style.backgroundColor = "orange"

choice.forEach(choice => choice.addEventListener('click', choices))

function choices(e) {
    const playerChoice = e.target.id
    const computerChoice = generateComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)
    // console.log("Computer Choice " + computerChoice)
    // console.log(winner)
    // console.log('Player Score', pScore)
    // console.log('Computer Score', cScore)
}

function getWinner(p, c) {

    console.log(p)
    if (p === c) {
        return 'draw'
    } else if (p === 'rock') {
        if (c === 'scissors') {
            pScore++;
            playerScore(pScore)
            pos.innerText = 'Winner'
            pos.style.background = 'green'
            return 'player winner'
        } else {
            cScore++;
            computerScore(cScore)
            pos.innerText = 'loss'
            pos.style.background = 'red'
            return 'player loss'
        }
    } else if (p === 'paper') {
        if (c === 'rock') {
            pScore++;
            playerScore(pScore)
            pos.innerText = 'Winner'
            pos.style.background = 'green'
            return 'player winner'
        } else {
            cScore++;
            computerScore(cScore)
            pos.innerText = 'loss'
            pos.style.background = 'red'
            return 'player loss'
        }
    } else if (p === 'scissors') {
        if (c === 'paper') {
            pScore++;
            playerScore(pScore)
            pos.innerText = 'Winner'
            pos.style.background = 'green'
            return 'player winner'
        } else {
            cScore++;
            pos.innerText = 'loss'
            pos.style.background = 'red'
            computerScore(cScore)
            return 'player loss'
        }
    }
}


function generateComputerChoice() {
    let gcc = Math.random()
    if (gcc < 0.34) {
        return 'rock'
    } else if (gcc <= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playerScore(pscore) {
    ps.innerText = pscore

    let a = cs.innerText
    // console.log(a)
    showColor(pscore, a)
}

function computerScore(cscore) {
    cs.innerText = cscore
    let a = ps.innerText
    showColor(a, cscore)
}

function restartFun() {
    pScore = 0
    cScore = 0
    ps.innerText = pScore
    cs.innerText = cScore
    pos.innerText = 's'
    psco.style.backgroundColor = "yellow"
    csco.style.backgroundColor = "yellow"
}

function showColor(pscore, cscore) {

    console.log(pscore)
    console.log(cscore)

    if (pscore > cscore) {
        psco.style.backgroundColor = "green"
        csco.style.backgroundColor = "red"
    } else {
        psco.style.backgroundColor = "red"
        csco.style.backgroundColor = 'green'
    }
}