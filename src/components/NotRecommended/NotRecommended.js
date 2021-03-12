import CaloriesInfo from './CaloriesInfo/CaloriesInfo';
import NotRecommendedCategoryList from './NotRecommendedCategoryList/NotRecommendedCategoryList';
import styles from './NotRecommended.module.css';

export default function NotRecommended() {
  return (
    <div className={styles.wrapper}>
      <CaloriesInfo />
      <NotRecommendedCategoryList title={'Нерекомендуемые продукты'} />
    </div>
  );
}
