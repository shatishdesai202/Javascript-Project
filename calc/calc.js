let screen =  document.getElementById('screen')
let btn =  document.querySelectorAll('.btn')
let screenValue = ""
let a 
console.log(screen.value)
for (let item of btn) {
    
    item.addEventListener('click', (e)=>{
        button = e.target.innerText
        if (item.innerText == 'C'){
            screen.value = ""
            screenValue = ""
        }
        else if(item.innerText == '=')
        {
            screen.value = eval(screenValue)
        }
        else if(item.innerText == '<'){
            screenValue = screenValue.substr(0, screenValue.length - 1);
            screen.value = screenValue;
            
        }
        else{
            screenValue += button
            screen.value = screenValue
        }
        
    })

}