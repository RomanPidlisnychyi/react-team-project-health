import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, onHover, onInputClick, onMouseOut }) => {
  const groupBlood = useSelector(authSelectors.getParams).bloodGroup;
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list} id="productList" onMouseOut={onMouseOut}>
        {products.map(({ title, groupBloodNotAllowed, _id }) => {
          const isNotRecommended = groupBloodNotAllowed[groupBlood];
          return (
            <li
              className={
                isNotRecommended
                  ? `${styles.listItem} ${styles.notRecommended}`
                  : styles.listItem
              }
              key={_id}
              value={title}
              onMouseOver={onHover}
              onClick={() => onInputClick(isNotRecommended)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
