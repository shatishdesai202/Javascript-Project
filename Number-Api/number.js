let numbertext = document.getElementById('inputtext')
numbertext.addEventListener('input', fun)

let showtext = document.getElementById('showText')

showtext.style.display = 'none'

function fun() {

    url = `http://numberapi.com/${numbertext.value}`
    let val = numbertext.value

    if (val !== '' ){
        fetch(url).then((response) => {
            return response.text()
        }).then(data => {

            call(data)

        })
        .catch(err => showtext.innerText = err)
    }
    else{
        showtext.innerText = 'Enter Number'
    }
}

function call(data) {

    if (data == undefined) {
        showtext.style.display = 'none'
        showtext.innerText = ''
    } else {
        showtext.innerText = data
        showtext.style.display = 'block'
    }

}