import React, { Component } from 'react';
import Slider from "react-slick";
import styles from './Carousel.module.css'

export class Carousel extends Component{
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
      };
      return (<div className={styles.container}>
        <Slider {...settings}>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' alt='test' />
          </div>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' alt='test' />
          </div>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' alt='test' />
          </div>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' alt='test' />
          </div>
          
        </Slider>
      </div>
      );
    }
  }

export default Carousel
