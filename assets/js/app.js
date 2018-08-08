window.$ = window.jQuery = require('jquery')
let Masonry = require('masonry-layout')
require('bootstrap')
require('slick-carousel')
require('lightgallery')


$(document).ready(() => {
  $('#projects-slider').slick({
    centerMode: true,
    prevArrow: $('#project-prev'),
    nextArrow: $('#project-next'),
    centerPadding: '100px',
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 1580,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ]
  })

  $('#lightgallery').lightGallery({
    fullScreen:false,
    toogleThumb:false,
    share:false,
    download:false,
    autoplayControls:false,
    actualSize:false,
    showThumbByDefault:true,
    selector: '.grid-item-image'
  });

const grid = document.querySelector('.grid-masonry')
 if (grid) {
   new Masonry(grid, {
     itemSelector: '.grid-item',
     columnWidth: '.grid-sizer'
   })
 }

})
