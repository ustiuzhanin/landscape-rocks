import React, { Component } from 'react';

import Button from '../UI/Button/Button';
import styles from './ContactForm.module.css';
import Logo from '../../assets/icons/contact.svg';
import { nameSvg } from '../../assets/icons/formIcons/icons.jsx';
import { phoneSvg } from '../../assets/icons/formIcons/icons.jsx';
import { emailSvg } from '../../assets/icons/formIcons/icons.jsx';
import { productSvg } from '../../assets/icons/formIcons/icons.jsx';

export class ContactForm extends Component {
  state = {
    form: {
      name: '',
      email: '',
      message: '',
      product: this.props.product
    }
  };
  render() {
    const submitHandler = e => {
      e.preventDefault();
      console.log(e);
    };

    const inputChangeHandler = e => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      });
    };

    let name,
      phone,
      email,
      message,
      product,
      image = null;

    if (this.props.name) {
      name = (
        <React.Fragment>
          <label className={styles.label} htmlFor='name'>
            Ваше Имя:
          </label>
          <span className={styles.iconSpan}>
            <input
              className={styles.formField}
              id='name'
              name='name'
              type='text'
              minLength='2'
              placeholder='Имя'
              required
              onChange={inputChangeHandler}
            />
            {nameSvg}
          </span>
        </React.Fragment>
      );
    }
    if (this.props.phone) {
      phone = (
        <React.Fragment>
          <label className={styles.label} htmlFor='phone'>
            Ваш Телефон:
          </label>
          <span className={styles.iconSpan}>
            <input
              className={styles.formField}
              id='phone'
              name='phone'
              type='tel'
              pattern='7[0-9]{10}'
              placeholder='Телефон'
              title='Номер должен содержать 11 цифр и начинатся с 7'
              onChange={inputChangeHandler}
              required
            />
            {phoneSvg}
          </span>
        </React.Fragment>
      );
    }
    if (this.props.email) {
      email = (
        <React.Fragment>
          <label className={styles.label} htmlFor='email'>
            Ваш E-mail:
          </label>
          <span className={styles.iconSpan}>
            <input
              className={styles.formField}
              id='email'
              type='email'
              placeholder='E-mail'
              name='email'
              onChange={inputChangeHandler}
            />
            {emailSvg}
          </span>
        </React.Fragment>
      );
    }
    if (this.props.message) {
      message = (
        <React.Fragment>
          <label className={styles.label} htmlFor='message'>
            Сообщение:
          </label>
          <textarea
            className={styles.formField}
            id='message'
            placeholder='Сообщение'
            name='message'
            onChange={inputChangeHandler}
          />
        </React.Fragment>
      );
    }

    if (this.props.product) {
      product = (
        <React.Fragment>
          <label className={styles.label} htmlFor='product'>
            Товар:
          </label>
          <span className={styles.iconSpan}>
            <input
              className={[styles.formField, styles.product].join(' ')}
              id='product'
              type='text'
              value={this.props.product}
              readOnly='readonly'
              name='product'
            />
            {productSvg}
          </span>
        </React.Fragment>
      );
    }

    if (this.props.image) {
      image = (
        <img className={styles.productImg} src={this.props.image} alt='test' />
      );
    }

    return (
      <form
        className={
          this.props.inner ? [styles.form, styles.inner].join(' ') : styles.form
        }
        onSubmit={submitHandler}
      >
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            <img
              className={styles.logo}
              src={Logo}
              width='25'
              height='25'
              alt='test'
            />
            {this.props.title}
          </legend>

          {image}
          {product}
          {name}
          {phone}
          {email}
          {message}

          <Button type='submit'>{this.props.btnTitle}</Button>
        </fieldset>
      </form>
    );
  }
}

export default ContactForm;
