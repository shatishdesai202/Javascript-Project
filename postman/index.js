let json = document.getElementById('json')
let parameter = document.getElementById('parameter')

let jsonformat = document.getElementById('jsonformat')
let parameterformat = document.getElementById('parameterformat')

parameterformat.style.display = "none"

function getElement(string) {

   let div = document.createElement('div')
   div.innerHTML = string
   return div.firstElementChild

}

json.addEventListener('click', () => {
   jsonformat.style.display = "block"
   parameterformat.style.display = "none"
})

parameter.addEventListener('click', () => {
   jsonformat.style.display = "none"
   parameterformat.style.display = "block"
})

let plus = document.getElementById('plus')
var paramCount = 0
plus.addEventListener('click', () => {
   let added = document.getElementById('added')
   string = `<div class="form-group row" >
               <label for="url" class="col-sm-2 col-form-label">parmeter ${paramCount+2}</label>

               <div class="col-sm-4">
               <input type="text" class="form-control" id="parameterkey${paramCount+2}" placeholder="value ${paramCount+2}">
               </div>
               <div class="col-sm-4">
                  <input type="text" class="form-control" id="parametervalue${paramCount+2}" placeholder="value ${paramCount+2}">
               </div>
                  <button class="btn btn-primary minus" id="minus"> - </button>
            </div>`
   let a = getElement(string)
   added.appendChild(a)

   let deleteelem = document.getElementsByClassName('minus')

   for (item of deleteelem) {
      item.addEventListener('click', (e) => {
         e.target.parentElement.remove()
      })
   }
   paramCount++

})

let submit = document.getElementById('submit')
submit.addEventListener('click', () => {

   let responceText = document.getElementById('responceText')
   responceText.value = 'please wait'

   let url = document.getElementById('url').value
   let request = document.querySelector("input[name='requestType']:checked").value
   let contant = document.querySelector("input[name='formattype']:checked").value

   
   if (contant == 'parameter') {
      data = {}
      for (let i = 0; i < paramCount + 1; i++) {
         if (document.getElementById('parameterkey' + (i + 1)) != undefined) {
            let key = document.getElementById('parameterkey' + (i + 1)).value;
            let value = document.getElementById('parametervalue' + (i + 1)).value;
            data[key] = value;
         }
      }
      data = JSON.stringify(data)
      
   } else {
      data = document.getElementById('jsonr').value
   }
   
   if (request == "POST") {
      fetch(url, {
         method: 'POST', 
         body: data,
         headers: {
             "Content-type": "application/json; charset=UTF-8"
           }  
     })
     .then(response=> response.text())
     .then((text) =>{
         document.getElementById('responceText').innerHTML = text;})
         Prism.highlightAll()
   }
   else
   {
      fetch(url, {
            method: 'GET'
         })
         .then(responce => responce.text())
         .then((text) => {
            document.getElementById('responceText').innerHTML = text
            Prism.highlightAll()
         })
   }
})