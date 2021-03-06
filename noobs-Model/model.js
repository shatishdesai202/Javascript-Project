let Button = document.getElementById('Button')

let modal = document.getElementById('modal')
modal.style.display = 'none'

let closed = document.getElementById('close')

closed.addEventListener('click', function(){
    modal.style.display = 'none'
})


Button.addEventListener('click', function(){

    modal.style.display = 'block'

})




