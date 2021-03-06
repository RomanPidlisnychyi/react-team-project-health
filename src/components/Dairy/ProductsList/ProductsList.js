import React from 'react';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, onHover, onItemClick }) => {
    // console.log('products: ', products);
    return <div className={styles.listContainer}>
        {products.length > 0 &&
            <ul className={styles.list}>
                {products.map(product =>
                    <li
                        className={styles.listItem}
                        key={product}
                        value={product}                        
                        onMouseOver={onHover}
                        onClick={onItemClick}
                    >{product}
                    </li>)
                }
            </ul>
        }
    </div>
}

export default ProductsList;