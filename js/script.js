

function burgerMenu(){
    const burgerBtn = document.querySelector('.burger-btn');
    const headerMenu = document.querySelector('.header-menu');
    burgerBtn.addEventListener('click', ()=>{
        headerMenu.classList.toggle('header-menu--active');
        burgerBtn.classList.toggle('burger-btn--animate');
    });
}

burgerMenu();