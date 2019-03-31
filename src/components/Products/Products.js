import React, { Component } from 'react';

import Product from './Product/Product';

export class Products extends Component {
  state = {
      product: [
          {
              id: 1,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://dummyimage.com/280x330/fff/aaa'
          },
          {
              id: 2,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://dummyimage.com/280x330/fff/aaa'
          },
          {
              id: 3,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://dummyimage.com/280x330/fff/aaa'
          },
          {
              id: 4,
              caption: 'Lorem Ipsum',
              description: 'Aliquam justo quam, eleifend vitae nisi ut, bibendum tincidunt nunc. Nullam non dolor quis lacus ultrices cursus. Vestibulum a eros sem. Quisque eu elementum nibh.',
              url: 'https://dummyimage.com/280x330/fff/aaa'
          },
      ]
  }
  render() {
    return (
      <section>
        <h2>Наша продукция</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales efficitur felis ac tristique.</p>
        {this.state.product.map(item => {
            return <Product key={item.id} caption={item.caption} desc={item.description} url={item.url} />
        })}
      </section>
    )
  }
}

export default Products
