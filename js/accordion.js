document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(element => {
        element.addEventListener('click', (e)=> {
            const self = e.currentTarget;
            self.querySelector('.accordion__content').classList.toggle('accordion__content--active');
            self.querySelector('.accordion__icon').classList.toggle('accordion__icon--active');
        });
    });
});