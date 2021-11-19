

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

// === Swipers ===

const swiper = new Swiper('.swiper', {
  
    slidesPerView: 3,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique-services',
        prevEl: '.swiper-button-prev-unique-services'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar-services',
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


const swiperReviews = new Swiper('.swiper-reviews', {
  
    slidesPerView: 3,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique-reviews-reviews',
        prevEl: '.swiper-button-prev-unique-reviews-reviews'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar-reviews',
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

// === /Swipers ===
