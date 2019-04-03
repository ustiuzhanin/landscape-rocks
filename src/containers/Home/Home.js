import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Products from '../../components/Products/Products';
import Questions from '../../components/Questions/Questions';
import About from '../../components/About/About';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Home.module.css';

export class Home extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h1>Название компании</h1>
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
