import React from 'react';

import styles from './Product.module.css';
import Button from '../../UI/Button/Button';

function product(props) {
  let product = null;
  let buttonText = 'Подробнее';
  if(props.priceTable) {
    buttonText = 'Заказать';
    product = (
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
  };
  return (
    <div className={styles.product}>
        <img src={props.url} alt='test' />
        <h3>{props.caption}</h3>
        <p>{props.desc}</p>
        {product}
        <Button type='button'>{buttonText}</Button>
    </div>
  )
}

export default product
