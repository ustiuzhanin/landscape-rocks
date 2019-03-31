import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Products from '../../components/Products/Products';
import Questions from '../../components/Questions/Questions';
import About from '../../components/About/About';
import ContactForm from '../../components/ContactForm/ContactForm';

export class Home extends Component {
  render() {
    return (
      <div>
        <p>qqq</p>
        <Carousel />
        <Products />
        <Questions />
        <About />
        <ContactForm />
      </div>
    )
  }
}

export default Home
