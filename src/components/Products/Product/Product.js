import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Product.module.css';

function product(props) {

    let productTable = null;

    if(props.priceTable) {
      productTable = (
        <table className={styles.table}>
            <tbody>
            <tr>
              <th>Обьем, м&sup3;</th>
              <th>Толшина, мм</th>
              <th>Цена Руб/м&sup3;</th>
            </tr>
              {props.priceTable.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.size}</td>
                    <td>{item.thickness}</td> 
                    <td>{item.price}</td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      )
    }

    return (
      <React.Fragment>
        <div className={styles.product}>
          <img src={props.url} alt='test' />
          <h3>{props.caption}</h3>
          <p>{props.desc}</p>
          {productTable}
          <Link className={styles.link} to={{
            pathname: '/catalog/' + props.caption,
            state: {
              name: true,
              phone: true,
              email: true,
              message: true,
              product: props.caption,
              image: props.url,
              title: 'Заказать товар',
              btnTitle: 'Отправить'
            }
          }}>
            Заказать
          </Link>
        </div>
      </React.Fragment>
    )

}

export default product
