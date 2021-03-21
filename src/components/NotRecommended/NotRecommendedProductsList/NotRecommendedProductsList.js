import ModList from '../ModList/ModList';
import styles from '../NotRecommended.module.css';

export default function NotRecommendedProductsList({
  products,
  category,
  onModalClose,
}) {
  return (
    <div className={styles.modWrapperInModal}>
      <p className={styles.modTitle}>
        Нерекомендуемые по категории:{' '}
        <span className={styles.modSpan}>{category}</span>
      </p>
      <div className={styles.categoryBoxInModal}>
        <ModList itemheight={23.2} data={products} />
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
