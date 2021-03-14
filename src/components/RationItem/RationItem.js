import React from 'react';
import { connect } from 'react-redux';
import rationItemsOperations from '../../redux/rations/rationItemsOperations';
import styles from './RationItem.module.css';
import rationItemsSelectors from '../../redux/rations/rationItemsSelectors';
import { authSelectors } from '../../redux/auth';

const RationItem = ({ item, bloodGroup, date, onDeleteItem }) => {
  const { title, weight, calories, groupBloodNotAllowed } = item;
  const isProductNotRecommended = groupBloodNotAllowed[bloodGroup];
  return (
    <li className={styles.item}>
      <p
        className={
          isProductNotRecommended
            ? `${styles.title} ${styles.notRecommended}`
            : styles.title
        }
      >
        {title}
      </p>
      <p className={styles.weight}>{weight} г</p>
      <p className={styles.calories}>
        {calories} <span className={styles.span}>ккал</span>
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={() => onDeleteItem(item._id, date)}
      >
        <span className={styles.closeSpan}>&#10006;</span>
      </button>
    </li>
  );
};

const mapStateToProps = state => ({
  date: rationItemsSelectors.getRationDate(state),
  bloodGroup: authSelectors.getParams(state).bloodGroup,
});

const mapDispatchToProps = {
  onDeleteItem: rationItemsOperations.deleteRationItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(RationItem);
