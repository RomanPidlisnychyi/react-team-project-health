import React from 'react';
import styles from './App.module.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import ProductInputForm from '../Dairy/ProductInputForm/ProductInputForm';
// import Rations from '../Dairy/Rations/Rations';
import RationItemsList from '../RationItemsList/RationItemsList';

import CalculatorCalories from '../CalculatorCalories/CalculatorCalories';

const App = () => {
  return (
    <div className={styles.commonWrapper}>
      <div className={styles.dairyWrapper}>
        {/* Dairy components */}

        <Switch>
          <Route path="/calculator" component={CalculatorCalories} />
          <Route path="/dairy" component={ProductInputForm} />
        </Switch>

        {/* <Rations /> */}
        <RationItemsList />
      </div>
      <div className={styles.usersInfoWrapper}>
        {/* UsersInfo components */}
      </div>
    </div>
  );
};

export default App;
