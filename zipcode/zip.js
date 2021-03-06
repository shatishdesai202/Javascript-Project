let text = document.getElementById('text')
text.addEventListener('input', searchApi)

let inner = document.getElementById('inner')


function searchApi() {
    let val = text.value
    console.log(val)
    let html = ""

    fetch(`https://pincode.saratchandra.in/api/pincode/${val}`)
        .then(res => res.text())
        .then(data => {
            // console.log(data)
            let a = JSON.parse(data)
            // console.log(a.data[0])
            // console.log("Run"+a['status'])
            if (a['status'] === 404) {
                html = `<div class="card border-success mb-3">
                <div class="card-header bg-transparent border-success"><strong>NO Data Found</strong></div>`

            } else {
                html = `<div class="card border-success mb-3">
                <div class="card-header bg-transparent border-success"><strong>${a.data[0].office_name}</strong></div>
                <div class="card-body text-success">
                <h5><span class='text-danger'>Division Name</span> : ${a.data[0].division_name}</h5>
                <h5><span class='text-danger'>Region Name</span> : ${a.data[0].region_name}</h5>
                <h5><span class='text-danger'>Taluka Name</span> : ${a.data[0].taluk}</h5>
                <h5><span class='text-danger'>District</span> : ${a.data[0].district}</h5>
                <h5><span class='text-danger'>State Name</span> : ${a.data[0].state_name}</h5>
                <div class="card-footer bg-transparent border-success"> <h4> <span class='text-danger'>Delivery Status</span> : ${a.data[0].delivery_status}</h4></div>
                </div>`
            }

            inner.innerHTML = html

        })

}
text.addEventListener('change', searchApi)