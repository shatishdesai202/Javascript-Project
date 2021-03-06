sign = 'X'
scoreX = 0
scoreO = 0

function printfun(number) {
    let a = document.getElementById('r' + number)
    if (a.innerText === '') {
        a.innerText = sign
        winner()
        changeSign(a.innerText)
    }
}

function changeSign(a) {
    if (a === 'X') {
        sign = 'O'
    } else {
        sign = 'X'
    }
}

function getbox(a) {
    return document.getElementById('r' + a).innerText
}

function check(a, b, c, m) {
    if ((getbox(a) == m) && (getbox(b) == m) && (getbox(c) == m)) {
        return true
    } else {
        return false
    }
}

function winner() {
    if (check(1, 2, 3, sign) || check(4, 5, 6, sign) || check(7, 8, 9, sign) || check(1, 5, 9, sign) || check(3, 5, 7, sign) || check(1, 4, 7, sign) || check(2, 5, 8, sign) || check(3, 6, 9, sign)) {
        dis()
        document.getElementById('message').innerText = `${sign} Winner`
        if (sign == 'X') {
            scoreX++
        } else {
            scoreO++
        }
        document.getElementById('scoreo').innerText = scoreO
        document.getElementById('scorex').innerText = scoreX

        return true
    }
    else{
        if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
       getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
       getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){
    
        document.getElementById('message').innerText = 'draw'
       }

}

function dis() {
    for (let index = 1; index <= 9; index++) {
        document.getElementById('r' + index).style.pointerEvents = 'none'
    }
}

let res = document.getElementById('restart')
res.addEventListener('click', () => {
    for (let index = 1; index <= 9; index++) {
        document.getElementById('r' + index).innerText = ''
        document.getElementById('r' + index).style.pointerEvents = 'auto'
        document.getElementById('message').innerText = ''

    }
})

document.getElementById('srestart').addEventListener('click', () => {
    scoreO = 0
    scoreX = 0
    for (let index = 1; index <= 9; index++) {
        document.getElementById('r' + index).innerText = ''
        document.getElementById('r' + index).style.pointerEvents = 'auto'
        document.getElementById('message').innerText = ''
        document.getElementById('scoreo').innerText = ''
        document.getElementById('scorex').innerText = ''
    }
})}