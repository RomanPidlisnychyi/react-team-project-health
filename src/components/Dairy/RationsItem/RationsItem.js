import React from 'react';
import ButtonClose from '../ButtonClose/ButtonClose';
import styles from './RationsItem.module.css';
import {connect} from 'react-redux';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';

const RationsItem = ({_id, title, weight, calories, onItemDelete, date}) =>     
        <div className={styles.rationsItemWrapper}>
            <div className={styles.rationsItem, styles.rationsItemTitle}>{title} </div>
            <div className={styles.rationsItem, styles.rationsItemWeight}>{weight}г </div>
            <div className={styles.rationsItem, styles.rationsItemCalories}>{calories}ккал </div>
            <ButtonClose onClick={() => onItemDelete(_id)}/>
        </div>

const mapStateToProps = () => ({

})  

const mapDispatchToProps = (dispatch, ownprops) => ({
    // onItemDelete: (param) => dispatch(rationsItemOperations.rationsItemDelete(param))
})
    
export default connect(mapStateToProps, mapDispatchToProps)(RationsItem);