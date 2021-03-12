import React from 'react';
import styles from './Home.module.css';

import CaloriesForm from '../CaloriesForm/CaloriesForm';

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.titleForm}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h2>
        <div className={styles.wrapperForm}>
          <CaloriesForm />
        </div>
      </div>
    </>
  );
};

export default Home;
