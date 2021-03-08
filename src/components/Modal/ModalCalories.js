import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListOfNonRecommendedProducts from '../ListOfNonRecommendedProducts/ListOfNonRecommendedProducts';
import NotRecommendedCategoryList from '../NotRecommended/NotRecommendedCategoryList/NotRecommendedCategoryList';
import Button from '../Button/Button';
import { notrecomendedproductsSelectors } from '../../redux/notrecomendedproducts';
import styles from './ModalCalories.module.css';

function ModalCalories({ calories, listNotRecomendedProducts, isModal }) {
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
              <NotRecommendedCategoryList
                categories={listNotRecomendedProducts}
              />
            </ol>
            <div className={styles.buttonStartLosingWeightWrapper}>
              <Link to={'/login'}>
                <Button
                  title={'Начать худеть'}
                  className={styles.buttonStartLosingWeight}
                  role={'link'}
                  onClick={() => isModal()}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  listNotRecomendedProducts: notrecomendedproductsSelectors.getListNotProducts(
    state,
  ),
  calories: notrecomendedproductsSelectors.getDailyCalorieNormInteger(state),
});

export default connect(mapStateToProps)(ModalCalories);
