$(document).ready(function (){
    let navBtn = $('.nav-icon-btn');
    let navIcon = $('.nav-icon');
    let nav =  $('.header__content');
  
    navBtn.click(function (){
        navIcon.toggleClass('nav-icon--active');
        nav.toggleClass('header__content--mobile');
    });
  });
  