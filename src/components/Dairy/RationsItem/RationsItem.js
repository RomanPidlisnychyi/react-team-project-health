import React from 'react';
import { connect } from 'react-redux';
import ButtonClose from '../ButtonClose/ButtonClose';
import styles from './RationsItem.module.css';

const RationsItem = ({_id, title, weight, calories, onItemDelete}) => {
    return (
        <div className={styles.rationsItemWrapper}>
            <div className={styles.rationsItem, styles.rationsItemTitle}>{title} </div>
            <div className={styles.rationsItem, styles.rationsItemWeight}>{weight}г </div>
            <div className={styles.rationsItem, styles.rationsItemCalories}>{calories}ккал </div>
            {/* <button className={styles.rationsItemButton} onClick={() => onItemDelete(_id)}>X</button> */}
            <ButtonClose onClick={() => onItemDelete(_id)}/>
        </div>
    )
}

// mapStateToProps = state => 

// export default connect(mapStateToProps)(RationsItem);
export default RationsItem;