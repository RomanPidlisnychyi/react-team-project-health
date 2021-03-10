import React from 'react';
import styles from './App.module.css';
import DairyWrapper from '../Dairy/DairyWrapper/DairyWrapper';
import NotRecommended from '../NotRecommended/NotRecommended';
import CalculatorCalories from '../CalculatorCalories/CalculatorCalories';

export default function App({ props }) {
  const { pathname } = props.location;
  return (
    <div className={styles.commonWrapper}>
      <div className={styles.dairyWrapper}>
        {pathname === '/calculator' ? <CalculatorCalories /> : <DairyWrapper />}
      </div>
      <div className={styles.usersInfoWrapper}>
        <NotRecommended />
      </div>
    </div>
  );
}
