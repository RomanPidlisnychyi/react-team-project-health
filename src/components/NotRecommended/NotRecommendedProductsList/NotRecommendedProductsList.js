import styles from '../NotRecommended.module.css';

export default function NotRecommendedProductsList({
  products,
  category,
  onModalClose,
}) {
  return (
    <div className={styles.modWrapper}>
      <p className={styles.modTitle}>
        Нерекомендуемые по категории:{' '}
        <span className={styles.modSpan}>{category}</span>
      </p>
      <div className={styles.modBox}>
        <ul className={styles.modList}>
          {products.map(product => (
            <li className={styles.item} key={product}>
              {product}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={styles.modButton}
          onClick={() => onModalClose(false)}
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
