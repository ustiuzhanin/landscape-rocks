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
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' />
          </div>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' />
          </div>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' />
          </div>
          <div>
            <img src='https://dummyimage.com/240x200/fff/aaa' />
          </div>
          
        </Slider>
      </div>
      );
    }
  }

export default Carousel
