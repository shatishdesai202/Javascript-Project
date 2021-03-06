let submit = document.getElementById('submit')
submit.addEventListener('click', submitFun)

let show = document.getElementById('show')
function submitFun() {
    let site = document.getElementById('sitename')
    let url = document.getElementById('siteurl')
    
    
    if (!validation(site, url)) {
        return false;
    }
    
    let bookmark = {
        title: site.value,
        url: url.value
    }
 
    
    if (localStorage.getItem('bookmark') == null) {
        var bookmarks = []
        bookmarks.push(bookmark)
        localStorage.setItem('bookmark', JSON.stringify(bookmarks))
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmark')) // Must check JSON.parse
        bookmarks.push(bookmark)
        localStorage.setItem('bookmark', JSON.stringify(bookmarks))
    }
    
    site.value = ''
    url.value = ''
    showFun()
}



const showFun = () => {
    show.innerHTML = ''
    let bookmarks = JSON.parse(localStorage.getItem('bookmark'))
    if (Object.keys(bookmarks).length === 0) {
        
    } else {
        bookmarks.forEach(element => {
            show.innerHTML += `<div class="container"  style="border:1px solid black;">
            <h4 onclick="deleteFun('${element.url}')" class="float-right btn">X</h4>
            <h1> ${element.title} </h1>
            <h4 class="float-right"><a href="${element.url}" target="_blank">Visit</a></h4>
            <h4>${element.url}</h4>
            </div>
            <br>`
        });
    }
    
}

function deleteFun(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmark'))
    for (let index = 0; index < bookmarks.length; index++) {
        if (bookmarks[index].url == url) {
            bookmarks.splice(index, 1)
        }
        
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmarks))
    showFun()
}

const validation = (site, url) => {
    
    if (site.value == '' || url.value == '') {
        alert('Please fill in the form');
        return false;
    }
    
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    
    if (!url.value.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}
showFun()