document.addEventListener('DOMContentLoaded', () => {

        // === Swipers ===

        const swiper = new Swiper('.services-swiper', {
    
            slidesPerView: 'auto',
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
        
            slidesPerView: 'auto',
            spaceBetween: 24,
    
            navigation: {
            nextEl: '.swiper-button-next-unique-reviews',
            prevEl: '.swiper-button-prev-unique-reviews ',
            },
        
            scrollbar: {
            el: '.reviews-swiper-scrollbar',
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
    
        const swiper3 = new Swiper('.licenses-swiper', {
        
            slidesPerView: 'auto',
            spaceBetween: 40,
    
            navigation: {
            nextEl: '.swiper-button-next-unique-licenses',
            prevEl: '.swiper-button-prev-unique-licenses ',
            },
        
            scrollbar: {
            el: '.licenses-swiper-scrollbar',
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

});