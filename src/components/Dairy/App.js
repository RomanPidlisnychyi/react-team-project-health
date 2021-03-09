import React, { Component } from 'react';
import styles from './App.module.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import dairyWrapper from '../Dairy/DairyWrapper/DairyWrapper';
import NotRecommended from '../NotRecommended/NotRecommended';
import CalculatorCalories from '../CalculatorCalories/CalculatorCalories';

const App = () => (
  <div className={styles.commonWrapper}>
    <div className={styles.dairyWrapper}>
      {/* Dairy components */}
  
      <Switch>
         <Route path="/calculator" component={CalculatorCalories} />
         <Route path="/dairy" component={dairyWrapper} />
      </Switch>
     
      {/* <Rations /> */}
      {/* <RationItemsList /> */}
    </div>
    <div className={styles.usersInfoWrapper}>
      <NotRecommended />
    </div>
  </div>
);

export default App;
