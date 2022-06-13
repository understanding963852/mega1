const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper(".swiper-container2", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    //뷰포터의 넓이>=0
    0: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    //뷰포터의 넓이>=600
    600: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    //뷰포터의 넓이>=768
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    //뷰포터의 넓이>=960
    960: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const movBtn = $(".movie_title ul li");
const movCont = $(".movie_chart > div");

movCont.hide().eq(0).show();

movBtn.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = $(this).index();
  movCont.hide().eq(index).show();
  movBtn.removeClass("active");
  target.addClass("active");
});


/* 공지사항 */

var tabMenu = $('.notice');

tabMenu.find('ul>li>ul').hide();
tabMenu.find('ul>li.active>ul').show();

var target;

tabMenu.find('ul>li>a').click(function(e){
     target = $(this);
     e.preventDefault();
     tabMenu.find('ul>li').removeClass('active');
     //parent() 부모요소
     target.parent('li').addClass('active');
     tabMenu.find('ul>li>a').next().hide();
     //next() 나의 아래요소(바로밑동생)
     //nextAll() 나의 아래요소들(나 밑의 동생들)
     target.next().show();

});