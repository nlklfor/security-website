

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

// === Swiper ===

const swiper = new Swiper('.swiper', {
  
    slidesPerView: 3,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints:{
        1000:{
            slidesPerView: 3,
        },
        600:{
            slidesPerView: 2,
        },
        300:{
            slidesPerView: 1,
        },
    }

});

// === /Swiper ===
