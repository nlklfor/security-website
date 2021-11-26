document.addEventListener('DOMContentLoaded', () => {

    // === Burger ===

    function burgerMenu(){
        const burgerBtn = document.querySelector('.burger-btn');
        const headerMenu = document.querySelector('.header-menu');
        burgerBtn.addEventListener('click', ()=>{
            headerMenu.classList.toggle('header-menu--active');
            burgerBtn.classList.toggle('burger-btn--animate');
        });
    }

    burgerMenu();

    // === /Burger ===

    // === popup ===

    function popup(){
        const closeBtn = document.querySelector('.window-close');
        const popupWindow = document.querySelector('.popup');
        closeBtn.addEventListener('click', ()=>{
            popupWindow.classList.toggle('popup--active');
        });
    }

    popup();

    // === /popup ===

});


