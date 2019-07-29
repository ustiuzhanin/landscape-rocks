import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css';

export class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false
          }
        }
      ]
    };
    return (
      <div className={styles.container}>
        <Slider {...settings}>
          <div>
            <img
              src={require('../../assets/pictures/6FD13ED9.jpeg')}
              alt='test'
            />
          </div>
          <div>
            <img
              src={require('../../assets/pictures/IMG_0269.jpeg')}
              alt='test'
            />
          </div>
          <div>
            <img
              src={require('../../assets/pictures/IMG_0268.jpeg')}
              alt='test'
            />
          </div>
          <div>
            <img
              src={require('../../assets/pictures/IMG_0343.jpeg')}
              alt='test'
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
