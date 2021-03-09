import React from 'react';
import { connect } from 'react-redux';

import styles from './CalculatorCalories.module.css';
import CaloriesForm from '../CaloriesForm/CaloriesForm';

import { authOperations, authSelectors } from '../../redux/auth';


const СalculatorCalories = ({userParams}) => {
console.log("userParams:", userParams);



  return (
    <div className={styles.wrapperСalculator}>
      <h1 className={styles.titleCalculator}>
        Узнай свою суточную норму калорий
      </h1>
      <CaloriesForm  />


    </div>
  );
};

// const mapStateToProps = state => ({
//   userParams: authSelectors.getParams(state),
// });


export default СalculatorCalories;
// export default connect(mapStateToProps, null)(СalculatorCalories);