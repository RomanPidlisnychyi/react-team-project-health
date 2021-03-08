import styles from '../NotRecommended.module.css';

export default function NotRecommendedCategoryList({ title, categories }) {
  return (
    <div className={styles.categoryBox}>
      <p className={styles.title}>{title}</p>
      {categories.length > 0 ? (
        <ol className={styles.list}>
          {categories.map(category => (
            <li className={styles.item} key={category}>
              <span>{category}</span>
            </li>
          ))}
        </ol>
      ) : (
        <span>Введите свои параметры...</span>
      )}
    </div>
  );
}
