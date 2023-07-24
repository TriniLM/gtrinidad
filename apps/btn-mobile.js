var btnMobile = document.getElementById('btn__mobile');
var nav = document.getElementById('header__nav');
btnMobile.addEventListener('click',()=>{
    btnMobile.classList.toggle('mobile__active');
    if(btnMobile.classList.contains('mobile__active')){ 
        nav.style.display = 'flex';
        nav.classList.add('nav__activo');
    }
    else{
        nav.style.display = 'none';
        nav.classList.remove('nav__activo')
    }
})
nav.addEventListener('click', (e)=>{
    if(e.target.tagName == 'A'){
        nav.style.display = 'none';
        btnMobile.classList.remove('mobile__active')
    }
})