import styles from '../NotRecommended.module.css';

export default function NotRecommendedProductsList({ products, onModalClose }) {
  return (
    <div className={styles.categoryBox}>
      <ul className={styles.list}>
        {products.map(product => (
          <li className={styles.item} key={product}>
            {product}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => onModalClose(false)}>
        Понятно
      </button>
    </div>
  );
}
