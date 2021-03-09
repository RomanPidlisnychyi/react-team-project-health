import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotRecommendedCategoryList from '../NotRecommended/NotRecommendedCategoryList/NotRecommendedCategoryList';
import Button from '../Button/Button';
import { notrecomendedproductsSelectors } from '../../redux/notrecomendedproducts';
import { authSelectors } from '../../redux/auth';
import styles from './ModalCalories.module.css';

function ModalCalories({ calories, token, isModal }) {
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
            <NotRecommendedCategoryList title="Продукты, которые вам не рекомендуется употреблять" />
            <div className={styles.buttonStartLosingWeightWrapper}>
              <Link to={token ? '/dairy' : '/login'}>
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
  calories: notrecomendedproductsSelectors.getDailyCalorieNormInteger(state),
  token: authSelectors.getToken(state),
});

export default connect(mapStateToProps)(ModalCalories);
