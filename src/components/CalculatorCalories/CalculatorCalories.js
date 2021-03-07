import React from 'react';
import styles from './CalculatorCalories.modele.css';

import CaloriesForm from '../CaloriesForm/CaloriesForm';


const СalculatorCalories = () => {
  return (
    <div className={styles.wrapperСalculator}>
      <h1 className={styles.titleCalculator}>Узнай свою суточную норму калорий</h1>
      <CaloriesForm />
      
    </div>
  );
};

export default СalculatorCalories;
