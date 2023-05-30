const endPoint = "http://127.0.0.1:1880/contato"
fetch(endPoint)
.then(res=>res.json())
.then(res=>{
    console.log(res)
})