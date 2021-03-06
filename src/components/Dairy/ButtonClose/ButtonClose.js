import React from 'react';
import styles from './ButtonClose.module.css';

const ButtonClose = ({onClick}) => <div onClick={onClick} className={styles.buttonContainer}>
    <div className={styles.buttonOneSide}></div>
    <div className={styles.buttonTwoSide}></div>
</div>

export default ButtonClose;