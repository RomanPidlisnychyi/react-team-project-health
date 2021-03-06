import React from 'react';
import ListOfNonRecommendedProducts from '../ListOfNonRecommendedProducts/ListOfNonRecommendedProducts';
import styles from './ModalCalories.module.css';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { modalActions } from '../../redux/modal/index';
import { Link } from 'react-router-dom';

function ModalCalories({ calories = '2800', isModal }) {
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
              <ListOfNonRecommendedProducts stylesList={styles.item} />
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

const mapDispatchToProps = {
  isModal: modalActions.offModal,
};

export default connect(null, mapDispatchToProps)(ModalCalories);
