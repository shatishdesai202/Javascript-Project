window.addEventListener('load', init)

const level = {
    easy: 5,
    mediaum: 4,
    hard: 3
}

let time = level.easy
let score = 0
let isplaying
var dis = ''

let sTime = document.getElementById('time')
sTime.innerText = time
let rTime = document.getElementById('time')
// console.log(rTime)
let currentWord = document.getElementById('current-word')
let text = document.getElementById('text')
// console.log(text)
let message = document.getElementById('amessage')
// console.log(message)
let timeLeft = document.getElementById('timeleft')
let cScore = document.getElementById('score')
// console.log(cScore)
let displayWord = document.getElementById('displayWord')


word = ["notice", "now", "n't", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them", "themselves", ]

function init() {
    showWord(word)
    setInterval(countDown, 1000)
    setInterval(checkStatus, 50)
    // setInterval(abc,1000)
    console.log('load')
}
text.addEventListener('input', startMatch)

function startMatch() {
    if (matchWord()) {
        isplaying = true
        time = level.easy
        showWord(word)
        text.value = ''
        score++
        message.innerHTML = "Correct"
        cScore.style.display = 'block'
        // let sc = localStorage.getItem('score')
        // console.log(typeof sc)
        // if(score > init(sc))
        // {
        //     localStorage.setItem('score',score)
        // }
        // // if(local == null){

        // // }
        // // else{
        // //     localStorage.setItem('score',score)
        // // }
    }
    if (score === -1) {
        cScore.innerHTML = 0
    } else {
        cScore.innerHTML = score
    }
}

function matchWord() {
    if (currentWord.innerHTML === text.value) {
        console.log('matched')
        display(a)
        return true
    } else {
        return false
    }
}
var a

function showWord(word) {
    a = word[Math.floor(Math.random() * word.length)]
    currentWord.innerHTML = a

}

function countDown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isplaying = false
    }

    timeLeft.innerText = time

}

function checkStatus() {
    if (!isplaying && time === 0) {
        message.innerHTML = "Game Over"
        score = -1
        

    }
}

function display(a) {
    if (score >= 0) {
        dis += `<li class="list-group-item mx-2 my-2">${a}</li>`
        displayWord.innerHTML = dis
    }
    else if(score === -1){
        for (let index = 0; index < 1; index++) {
            dis += `<li class="list-group-item mx-2 my-2 bg-danger">Restart</li>`
            displayWord.innerHTML = dis
        }
    }

}

// function abc(){
//     console.log('running')
// }