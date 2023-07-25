import React from 'react'

const button = React.createElement(React.Fragment, null)

export const settings = {
  prevArrow: button,
  nextArrow: button,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnFocus: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 928,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
