const cabeçalho = document.querySelector('#cabecalho');

const menu = document.querySelector('#menu');

const home = document.querySelector('#btn-home');
const novo = document.querySelector('#btn-novo');
const pesquisar = document.querySelector('#btn-pesquisar');
const gestao = document.querySelector('#btn-gestao');
const sobre = document.querySelector('#btn-sobre');

const principal = document.querySelector('#principal');

home.addEventListener('click', (evt)=>{
    selecionarAba(evt.target)
    window.open('home.html', 'ifm-main')
})
novo.addEventListener('click', (evt)=>{
    selecionarAba(evt.target)
    window.open('novo.html', 'ifm-main')
    
})
pesquisar.addEventListener('click', (evt)=>{
    selecionarAba(evt.target)
    window.open('pesquisar.html', 'ifm-main')
})
gestao.addEventListener('click', (evt)=>{
    selecionarAba(evt.target)
    window.open('gestao.html', 'ifm-main')
})
sobre.addEventListener('click', (evt)=>{
    selecionarAba(evt.target)   
    window.open('sobre.html', 'ifm-main')
})
const selecionarAba =  (el)=>{
    const abas = [...document.querySelectorAll('.aba')]
    console.log(abas)
    abas.forEach((e)=>{
        e.classList.remove('abaSelect')
    })
    el.classList.add('abaSelect')
}
