const btn_add = document.querySelector('#btn_gravar')
const btn_rem = document.querySelector('#btn_cancelar')

// const id_campo = document.querySelector('#f-id')
const nome_campo = document.querySelector('#f-nome')
const nasc_campo = document.querySelector('#f-nasc')
const email_campo = document.querySelector('#f-email')
const tel_campo = document.querySelector('#f-tel')

btn_add.addEventListener('click', (evt)=>{
    const dados = {
        "nome_campo": nome_campo.value,
        "nasc_campo": nasc_campo.value,
        "email_campo": email_campo.value,
        "tel_campo": tel_campo.value
    }
    console.log(dados)
    const endPoint = "http://127.0.0.1:1880/addcontato"
    const cabeccalho={
        method: 'POST',
        body:JSON.stringify(dados) 
    }
    fetch(endPoint, cabeccalho)
    .then(res=>{
        if (res.status ==200){
            console.log('bunda')
        }else{
            for (let i = 0; i<3; i++){
                alert('FEROOU O SISTEMAAAA PREPARE-SE PARA  THE SHUTDOWN!!!!! UMA AMEAÇA FOI DETECTADA PREPARE PRA O SHUTDOWN')
            }
        }
    })

})



