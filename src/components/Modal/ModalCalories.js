import React from 'react';
import ListOfNonRecommendedProducts from '../ListOfNonRecommendedProducts/ListOfNonRecommendedProducts';
import styles from './ModalCalories.module.css';
import Button from '../Button/Button';

// export default function ModalCalories({ calories = '2800' }) {
export default function ModalCalories({ calories, listNotRecomendedProducts }) {
  // console.log('calories:', calories);

  return (
    <div className={styles.cover}>
      <div className={styles.modalCalories}>
        <div className={styles.modalCaloriesWrapper}>
          <h2 className={styles.headingCalories}>
            Ваша рекомендуемая суточная норма калорий составляет
          </h2>
          <div className={styles.wrapperCountedCalories}>
            <div className={styles.countedСalories}>
              <h3 className={styles.calories}>
                {calories}
                <p className={styles.unitOfEnergy}>ккал</p>
              </h3>
            </div>

            <h4 className={styles.groceryList}>
              Продукты, которые вам не рекомендуется употреблять
            </h4>
            <ol className={styles.listItem}>
              <ListOfNonRecommendedProducts
                productsNotRecommended={listNotRecomendedProducts}
                stylesList={styles.item}
              />
            </ol>
            <div className={styles.buttonStartLosingWeightWrapper}>
              <Button
                title={'Начать худеть'}
                className={styles.buttonStartLosingWeight}
              />
              {/* <button className={styles.buttonStartLosingWeight}>
                Начать худеть
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
