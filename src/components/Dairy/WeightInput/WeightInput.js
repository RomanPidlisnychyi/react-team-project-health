import React from 'react';
import styles from './WeightInput.module.css';

const WeightInput = ({ onChangeWeight, weight, disabled }) => (
  <label className={styles.inputLabel}>
    <input
      name="weight"
      type="number"
      min="10"
      max="1000"
      placeholder="Граммы"
      className={styles.input}
      onChange={onChangeWeight}
      value={weight}
      disabled={false}
    />
  </label>
);

export default WeightInput;
