import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';
import { loadingSelectors } from '../../redux/loading';
import DairyWrapper from '../Dairy/DairyWrapper/DairyWrapper';
import NotRecommended from '../NotRecommended/NotRecommended';
import CalculatorCalories from '../CalculatorCalories/CalculatorCalories';
import styles from './App.module.css';

const override = css`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  margin: 0 auto;
  padding-top: 100px;
`;

export default function App({ props }) {
  const { pathname } = props.location;
  const loading = useSelector(loadingSelectors);
  return (
    <div className={styles.commonWrapper}>
      <div className={styles.dairyWrapper}>
        {pathname === '/calculator' ? <CalculatorCalories /> : <DairyWrapper />}
      </div>
      <div className={styles.usersInfoWrapper}>
        <NotRecommended />
      </div>
      <ScaleLoader color="#fc842d" loading={loading} css={override} />
    </div>
  );
}
