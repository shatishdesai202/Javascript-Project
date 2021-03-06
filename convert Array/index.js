var submit = document.getElementById('submit');
let arr = [];
let textarea = document.getElementById('textarea')
let output = document.getElementById('output')
let g = output.innerText
submit.addEventListener('click', function () {
    html = ''
    arr = textarea.value.split('\n');
    arr = arr.filter(Boolean)
    html = "["
    for (let index = 0; index < arr.length; index++) {
        html += ` "${arr[index]}",`
    }
    let g = html + ']'
    console.log(g)
    output.innerText = g
});
let hide = document.getElementById('hide')

function myFunction() {
    output.select();
    document.execCommand("copy");
    hide.style.display = 'block'
}