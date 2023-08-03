import React from 'react'

const button = React.createElement(React.Fragment, null)

export const settings = {
  prevArrow: button,
  dots: false,
  nextArrow: button,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 2000,
  autoplay: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 728,
      settings: {
        slidesToShow: 3,
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
