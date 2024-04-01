
// Header ==============================================

const header = document.querySelector('.header')
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const body = document.body;

addEventListener("click", openBurger);
addEventListener('scroll', headerView)

function openBurger(e) {

   if (e.target.closest('.header__burger')) {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      body.classList.toggle('lock');
   }
   if (!e.target.closest('.header__nav') && !e.target.closest('.header__burger')) {
      burger.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('lock');
   }
}

function headerView(e){
   if ((!header.classList.contains('bottom')) && window.scrollY > (header.offsetHeight /4)){
         header.classList.add('bottom')
         console.log(23);
   }
   if ((header.classList.contains('bottom')) && window.scrollY < header.offsetHeight){
         header.classList.remove('bottom')
         console.log(236);
   }
}

// =====================================================

