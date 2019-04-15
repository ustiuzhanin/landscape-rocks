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
          },
        ],
      };
      return (<div className={styles.container}>
        <Slider {...settings}>
          <div>
            <img src='https://images.unsplash.com/photo-1552752399-22aa8f97ade0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1500&q=80' alt='test' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' alt='test' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' alt='test' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1537531579368-1af433cf6f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' alt='test' />
          </div>
          
        </Slider>
      </div>
      );
    }
  }

export default Carousel
