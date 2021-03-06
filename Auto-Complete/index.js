let search = document.getElementById('search')
search.addEventListener('input', searchFun)
// search.addEventListener('change', searchFun)

let matchList = document.getElementById('matchList')

async function searchFun() {
    let val = search.value
    
    const res = await fetch('index.json')
    const data = await res.json()

    let match = data.filter(data => {
        const reg = new RegExp(`^${val}`, 'gi')
        return data.name.match(reg) || data.abbr.match(reg);
    });


    if (val.length === 0) {
        match = []
        matchList.innerHTML=''
    }
    outputhtml(match)
}

function outputhtml(matches) {
    let html = ''
    if (matches.length > 0) {

        matches.forEach(match => {
            html += `<div class=" container card card-body mb-2">
            <h4>${match.name} (${match.abbr}) 
            <span class = "text-primary">${match.capital}</span></h4>
            <big> Lat: ${match.lat} / Long: ${match.long} </big>
            </div>`
            matchList.innerHTML = html
        })

    }

}