import React from 'react';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, onHover, onInputClick, onMouseOut }) => {
    return <div className={styles.listContainer}>
        <ul className={styles.list}
            id="productList"
            onMouseOut={onMouseOut}
        >
            {products.map(product =>
                <li 
                    className={styles.listItem}
                    key={product}
                    value={product}
                    onMouseOver={onHover}
                    onClick={onInputClick}
                >{product}
                </li>)
            }
        </ul>
    </div>
}

export default ProductsList;