import React from 'react';
import styles from './WeightInput.module.css';

const WeightInput = ({onChangeWeight, weight, disabled}) =>
    <input name="weight"
        type="number"
        min="10"
        max="1000"
        placeholder="Граммы"
        className={styles.input}
        onChange={onChangeWeight}
        value={weight}
        disabled={disabled}
    />

export default WeightInput;