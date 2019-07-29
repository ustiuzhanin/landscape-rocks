import React from 'react';

import styles from './Catalog.module.css'
import Products from '../../components/Products/Products';

function Catalog(props) {
  return (
    <section className={styles.catalog}>
      <Products title="Каталог товаров" inner />
    </section>
  )
}

export default Catalog
