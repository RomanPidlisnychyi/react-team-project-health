import React from 'react';
import styles from './WeightInput.module.css';

const WeightInput = ({onChangeWeight, weight}) =>
    <input name="weight"
        type="text"
        placeholder="Граммы"
        className={styles.input}
        onChange={onChangeWeight}
        value={weight}
    />

export default WeightInput;