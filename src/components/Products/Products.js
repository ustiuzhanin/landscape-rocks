import React, { Component } from 'react';

import Product from './Product/Product';
import styles from './Products.module.css'

export class Products extends Component {
  state = {
      product: [
          {
              id: 1,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://images.unsplash.com/photo-1507692922428-8ba03236ebc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
          },
          {
              id: 2,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://images.unsplash.com/photo-1443397496996-b312c918b54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2448&q=80'
          },
          {
              id: 3,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://images.unsplash.com/photo-1507692922428-8ba03236ebc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
          },
          {
              id: 4,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://images.unsplash.com/photo-1443397496996-b312c918b54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2448&q=80'
          },
      ]
  }
  render() {
    return (
      <section className={styles.products}>
        <h2>Наша продукция</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales efficitur felis ac tristique.</p>
        {this.state.product.map(item => {
            return <Product key={item.id} caption={item.caption} desc={item.description} url={item.url} />
        })}
      </section>
    )
  }
}

export default Products
