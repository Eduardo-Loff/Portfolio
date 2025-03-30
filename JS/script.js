let btnMenu = document.getElementById('amenu')
let menu = document.getElementById('menu')
let menu2 = document.getElementById('m-mobile')
let  btnFechar = document.getElementById('fmenu')
let cBtn = document.getElementById('cbutton')
let email = document.getElementById('email')
let nome = document.getElementById('nome')
let assunto = document.getElementById('assunto')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

btnFechar.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
