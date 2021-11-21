

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

const swiper = new Swiper('.services-swiper', {
  
    slidesPerView: 3,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique-services',
        prevEl: '.swiper-button-prev-unique-services'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.services-swiper-scrollbar',
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


const swiper2 = new Swiper('.reviews-swiper', {
  
    slidesPerView: 3,
    spaceBetween: 24,

    navigation: {
      nextEl: '.swiper-button-next-unique-reviews',
      prevEl: '.swiper-button-prev-unique-reviews ',
    },
  
    scrollbar: {
      el: '.reviews-swiper-scrollbar',
    },
});

const swiper3 = new Swiper('.licenses-swiper', {
  
    slidesPerView: 4,
    spaceBetween: 40,

    navigation: {
      nextEl: '.swiper-button-next-unique-licenses',
      prevEl: '.swiper-button-prev-unique-licenses ',
    },
  
    scrollbar: {
      el: '.licenses-swiper-scrollbar',
    },
});

// === /Swipers ===
