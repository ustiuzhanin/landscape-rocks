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
              url: 'https://images.unsplash.com/photo-1507692922428-8ba03236ebc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
              priceTable: [
                {
                    size: '1-11',
                    thickness: '10-20',
                    price: '11 000'
                },
                {
                    size: '1-11',
                    thickness: '25 и более',
                    price: '7 000'
                },
                {
                    size: 'От 12',
                    thickness: '10-20',
                    price: '10 000'
                },
                {
                    size: 'От 12',
                    thickness: '25 и более',
                    price: '6 000'
                }
              ]
          },
          {
              id: 2,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://images.unsplash.com/photo-1443397496996-b312c918b54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2448&q=80',
              priceTable: [
                {
                    size: '1-11',
                    thickness: '10-20',
                    price: '11 000'
                },
                {
                    size: '1-11',
                    thickness: '25 и более',
                    price: '7 000'
                },
                {
                    size: 'От 12',
                    thickness: '10-20',
                    price: '10 000'
                },
                {
                    size: 'От 12',
                    thickness: '25 и более',
                    price: '6 000'
                }
              ]
          },
          {
              id: 3,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://images.unsplash.com/photo-1507692922428-8ba03236ebc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
              priceTable: [
                {
                    size: '1-11',
                    thickness: '10-20',
                    price: '11 000'
                },
                {
                    size: '1-11',
                    thickness: '25 и более',
                    price: '7 000'
                },
                {
                    size: 'От 12',
                    thickness: '10-20',
                    price: '10 000'
                },
                {
                    size: 'От 12',
                    thickness: '25 и более',
                    price: '6 000'
                }
              ]
          },
          {
              id: 4,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://images.unsplash.com/photo-1443397496996-b312c918b54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2448&q=80',
              priceTable: [
                {
                    size: '1-11',
                    thickness: '10-20',
                    price: '11 000'
                },
                {
                    size: '1-11',
                    thickness: '25 и более',
                    price: '7 000'
                },
                {
                    size: 'От 12',
                    thickness: '10-20',
                    price: '10 000'
                },
                {
                    size: 'От 12',
                    thickness: '25 и более',
                    price: '6 000'
                }
              ]
          },
      ]
  }
  render() {
    
    return (
      <section className={styles.products}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales efficitur felis ac tristique.</p>
        <div className={styles.wrapper}>
            {this.state.product.map(item => {
                console.log(item.id)
                return <Product 
                    key={item.id} 
                    caption={item.caption} 
                    desc={item.description} 
                    url={item.url} 
                    priceTable={this.props.inner ? item.priceTable : null} />
            })}
        </div>
      </section>
    )
  }
}               

export default Products             
                