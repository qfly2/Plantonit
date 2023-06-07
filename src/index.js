import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';

$(document).ready(function() {
    $(".slider").each(function () { 
     var obj = $(this);
     $(obj).append("<div class='nav'></div>");
     $(obj).find(".slider__item").each(function () {
      $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); 
      $(this).addClass("slider"+$(this).index());
     });
     $(obj).find("span").first().addClass("on"); 
    });
   });
   function sliderJS (obj, sl) { 
    var ul = $(sl).find(".slider__content"); 
    var bl = $(sl).find(".slider__item.slider"+obj); 
    var step = $(bl).width(); 
    $(ul).animate({marginLeft: "-"+step*obj}, 500); 
   }
   $(document).on("click", ".slider .nav span", function() { 
    var sl = $(this).closest(".slider");
    $(sl).find("span").removeClass("on"); 
    $(this).addClass("on"); 
    var obj = $(this).attr("rel"); 
    sliderJS(obj, sl); 
    return false;
});

const iconMenu = document.querySelector('.menu__icon');
   const navigation = document.querySelector('.mobile-menu');
   const header = document.querySelector('.header');
   if (iconMenu){
       iconMenu.addEventListener("click", function(e){
           document.body.classList.toggle('_lock');
           iconMenu.classList.toggle('_active');
           navigation.classList.toggle('_active');
           header.classList.toggle('_active');
       });
   }
   
   
   
   const menuLinks = document.querySelectorAll('.navigation__link[data-goto]');
   if(menuLinks.length > 0){
       menuLinks.forEach(menuLink => {
           menuLink.addEventListener("click", onMenuLinkClick);
       });
   
       function onMenuLinkClick(e) {
           const menuLink = e.target;
           if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
               const gotoBlock = document.querySelector(menuLink.dataset.goto);
               const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
               
               if(iconMenu.classList.contains('_active')){
                   document.body.classList.remove('_lock');
                   iconMenu.classList.remove('_active');
                   navigation.classList.remove('_active');
                   header.classList.remove('_active');
               }
   
               window.scrollTo({
                   top: gotoBlockValue,
                   behavior: "smooth"
               });
           }
   
       }
   }