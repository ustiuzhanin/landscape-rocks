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
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Название компании</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
        </div>
        <Carousel />
        <Products title="Наша продукция" />
        <Questions />
        <About />
        <ContactForm title="Свяжитесь с нами!" btnTitle="Отправить" name phone email message/>
      </div>
    )
  }
}

export default Home
