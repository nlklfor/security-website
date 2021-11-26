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

        const unActiveBtns = document.querySelectorAll('.unActive');
        unActiveBtns.forEach(element => {
            element.addEventListener('click', ()=>{
                popupWindow.classList.toggle('popup--active');
            });
        });

    }

    popup();

    // === /popup ===

    // === Lang ===

    function lang(){
        const langBtns = document.querySelectorAll('.change-lang-btn');
        console.log(langBtns);
        langBtns.forEach(element => {
            element.addEventListener('click', (e)=>{
                const self = e.currentTarget;
                self.classList.toggle('change-lang-btn--active');
            });
        });
    }

    lang();

    // === /Lang ===

});


