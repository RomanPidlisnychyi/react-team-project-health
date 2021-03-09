import { useSelector } from 'react-redux';
import { notrecomendedproductsSelectors } from '../../../redux/notrecomendedproducts';
import styles from '../NotRecommended.module.css';

export default function NotRecommendedCategoryList({ title, onTabHandler }) {
  const categories = useSelector(
    notrecomendedproductsSelectors.getListNotProducts,
  );
  return (
    <div className={styles.categoryBox}>
      <p className={styles.title}>{title}</p>
      {categories.length > 0 ? (
        <ol className={styles.list}>
          {categories.map(category => (
            <li className={styles.item} key={category}>
              <span
                title="Подробнее ..."
                onClick={onTabHandler}
                className={styles.span}
              >
                {category}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <span>Введите свои параметры...</span>
      )}
    </div>
  );
}
