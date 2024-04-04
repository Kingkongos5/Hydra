
// Header ==============================================

const header = document.querySelector('.header')
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const body = document.body;
const email = document.querySelector('.form-contact__input-email')
const textarea = document.querySelector('.form-contact__textarea')
const cursor = document.querySelector('.cursor')

addEventListener("click", openBurger);
addEventListener('scroll', headerView)
email.addEventListener('input', function () {
   if (email.value.length > 22) {
      if (email.offsetWidth <= 467) {
         email.style.fontSize = '12px'
         if (email.value.length > 30) {
            email.style.fontSize = '10px'
         }
      }
   } else {
      if (email.style.fontSize != "16px") {
         email.style.fontSize = "16px"
      }
   }
})
textarea.addEventListener('input', function () {
   console.log(textarea.value.length);
   if (textarea.value.length > 125) {
      textarea.style.fontSize = '14px'
   } else {
      if (textarea.style.fontSize != "16px") {
         textarea.style.fontSize = "16px"
      }
   }
})

function openBurger(e) {

   if (e.target.closest('.header__burger')) {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      body.classList.toggle('lock');
   }
   if ((!e.target.closest('.header__nav') && !e.target.closest('.header__burger')) || e.target.closest('.nav__link') || e.target.closest('.header__btn')) {
      burger.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('lock');
   }
}

function headerView(e) {
   if ((!header.classList.contains('bottom')) && window.scrollY > (header.offsetHeight / 4)) {
      header.classList.add('bottom')
   }
   if ((header.classList.contains('bottom')) && window.scrollY < header.offsetHeight) {
      header.classList.remove('bottom')
   }
}

// =====================================================

addEventListener("mousemove", function (e) {
   if (window.innerWidth >= 1024) {
      cursor.style.top = window.scrollY + e.clientY - 100 + "px"
      cursor.style.left = e.clientX - 100 + "px"
   }
})

document.documentElement.classList.contains('loader') || window.addEventListener('load', function () {
   setTimeout((function () {
      window.scrollTo(0, 0)
      document.documentElement.classList.add('loaded')
   }), 0)
})

// Navigation

const items = document.querySelector('body');
const allA = items.querySelectorAll('a').forEach((link) => {
   let href = link.getAttribute('href');
   if (href && href.length > 1) {
      href = href.split('#')[1];
   }
   link.addEventListener("click", function (e) {
      e.preventDefault();
      if (href && href.length !== 0) {
         var el = document.getElementById(href);
      }
      if (el) {
         el.scrollIntoView({ behavior: 'smooth' });
      } else {
         window.scrollTo(0, 0);
      }
   });
});
