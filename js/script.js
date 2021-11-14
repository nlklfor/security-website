

function burgerMenu(){
    const burgerBtn = document.querySelector('.burger-btn');
    const headerMenu = document.querySelector('.header-menu');
    burgerBtn.addEventListener('click', ()=>{
        headerMenu.classList.toggle('header-menu--active');
        burgerBtn.classList.toggle('burger-btn--animate');
    });
}

burgerMenu();



function outNum1(num, elem) {
    let time = 3000;
    let step = 500; 
    let f = document.querySelector('#out1');
    a = 0;
    let s = Math.round(time/(num/step));
    let interval = setInterval(() => {
        a = a + step;
        if(a == num) {
              clearInterval(interval);
         }
    f.innerHTML = a;
                },
  s);
};
outNum1(50000, '#out1');  


function outNum2(num, elem) {
    let time = 3000;
    let step = 500; 
    let q = document.querySelector('#out2');
    m = 0;
    let z = Math.round(time/(num/step));
    let interval = setInterval(() => {
        m = m + step;
        if(m == num) {
              clearInterval(interval);
         }
    q.innerHTML = m;
                },
  z);
};
outNum2(42000, '#out2');  


function outNum3(num, elem) {
    let time = 3000;
    let step = 200; 
    let n = document.querySelector('#out3');
    p = 0;
    let w = Math.round(time/(num/step));
    let interval = setInterval(() => {
        p = p + step;
        if(p == num) {
              clearInterval(interval);
         }
    n.innerHTML = p;
                },
  w);
};
outNum3(25000, '#out3');


function outNum4(num, elem) {
    let time = 3000;
    let step = 200; 
    let i = document.querySelector('#out4');
    d = 0;
    let b = Math.round(time/(num/step));
    let interval = setInterval(() => {
        d = d + step;
        if(d == num) {
              clearInterval(interval);
         }
    i.innerHTML = d;
                },
  b);
};
outNum4(18000, '#out4');  