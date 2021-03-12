import React from 'react';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, onHover, onInputClick, onMouseOut }) => {
  //   console.log('products', products);
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list} id="productList" onMouseOut={onMouseOut}>
        {products.map(({ title, groupBloodNotAllowed, _id }) => (
          <li
            className={styles.listItem}
            key={_id}
            value={title}
            onMouseOver={onHover}
            onClick={onInputClick}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
