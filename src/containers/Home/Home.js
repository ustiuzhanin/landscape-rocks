import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Products from '../../components/Products/Products';
import Questions from '../../components/Questions/Questions';
import About from '../../components/About/About';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Home.module.css';

export class Home extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className={styles.main}>
        <h1>Название компании</h1>
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
