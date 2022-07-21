hamburger=document.querySelector('.hamburger');
navright=document.querySelector('.navright');
navbar=document.querySelector('.navbar');

hamburger.addEventListener('click',()=>{
    navright.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
