import styles from '../NotRecommended.module.css';

export default function NotRecommendedCategoryList({ categories }) {
  return (
    <>
      <h2>Нерекомендуемые продукты</h2>
      {categories.length > 0 ? (
        <ol className={styles.listItem}>
          {categories.map(category => (
            <li className={styles.item} key={category}>
              <span>{category}</span>
            </li>
          ))}
        </ol>
      ) : (
        <span>Введите свои параметры...</span>
      )}
    </>
  );
}
