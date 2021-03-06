let show = document.getElementById('show')
show.style.display = 'none'

let localFile = document.getElementById('localFile')
localFile.addEventListener('click', local)

let jsonFile = document.getElementById('jsonFile')
jsonFile.addEventListener('click', jsons)

let external = document.getElementById('external')
external.addEventListener('click', externalFun)

let submit = document.getElementById('postR')
submit.addEventListener('click', showSubmit)

function showSubmit(){
    document.getElementById('post').style.display = 'block'
    document.getElementById('titles').innerText = ''
    document.getElementById('text').innerText = ''
    document.getElementById('submit').addEventListener('click',submitFun)
}

document.getElementById('post').style.display = 'none'

function submitFun(e) {
    document.getElementById('titles').innerText = ''
    document.getElementById('text').innerText = ''
    e.preventDefault()
    let title = document.getElementById('eTitle').value
    let body = document.getElementById('eBody').value
    let url = 'https://jsonplaceholder.typicode.com/posts'
    data={"name":title,"job":body}
    params = {
        method: "POST",
        header: {
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title:title,body:body})
    }
    fetch(url, params)
    .then(res => res.json())
    .then(data => {
        document.getElementById('postre').innerText = JSON.stringify(data)
    })
}

function local() {
    document.getElementById('post').style.display = 'none'
    let localVar
    fetch('fetch.txt')
        .then(res => res.text())
        .then(data => {
            document.getElementById('titles').innerText = 'LocalFile'
            document.getElementById('text').innerText = `${data}`
        })
    show.style.display = 'block'
}

function jsons() {
    document.getElementById('post').style.display = 'none'
    document.getElementById('titles').innerText = ''
    document.getElementById('text').innerText = ''
    let localVar
    fetch('fetch.json')
        .then(res => res.json())
        .then(data => {
            document.getElementById('titles').innerText = 'jsonFile'

            data.forEach(element => {
                document.getElementById('text').innerHTML += `<ul class="list-group">
                                                            <li class="list-group-item bg-primary">${element.id}</li>
                                                            <li class="list-group-item">${element.name}</li>
                                                            <li class="list-group-item">${element.age}</li>
                                                            </ul><br>`
            });
            console.log(data)
        })
    show.style.display = 'block'
}

function externalFun() {
    document.getElementById('post').style.display = 'none'
    document.getElementById('titles').innerText = ''
    document.getElementById('text').innerText = ''
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            document.getElementById('titles').innerText = 'ExternalFile'

            data.forEach((element, index) => {
                if (index < 5) {

                    document.getElementById('text').innerHTML += `<ul class="list-group">
                    <li class="list-group-item bg-primary">${element.id}</li>
                    <li class="list-group-item">${element.title}</li>
                    <li class="list-group-item">${element.body}</li>
                    </ul><br>`
                }
            });
            console.log(data)
        })
    show.style.display = 'block'
}