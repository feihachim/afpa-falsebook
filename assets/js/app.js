'use strict';

const linkNav=document.querySelector('.expand-nav');
const navLogo=document.querySelectorAll('nav ul:nth-child(2), nav ul:nth-child(3)');

const toggleNav=(element)=>{
    if(element.style.display==='none'){
        element.style.display='flex';
    }
    else{
        element.style.display='none';
    }
};
   
linkNav.addEventListener('click',event=>{
    navLogo.forEach(toggleNav);
});