import React from 'react';
import { connect } from 'react-redux';
import rationItemsOperations from '../../redux/rations/rationItemsOperations';
import styles from './RationItem.module.css';
import rationItemsSelectors from '../../redux/rations/rationItemsSelectors';

const RationItem = ({ item, date, onDeleteItem }) => {
  const { title, weight, calories } = item;
  return (
    <li>
      <p className={styles.title}>{title}</p>
      <p className={styles.weight}>{weight}</p>
      <p className={styles.calories}>{calories}</p>
      <section className={styles.button}>
        <button type="button" onClick={() => onDeleteItem(item._id, date)}>
          &#10006;
        </button>
      </section>
    </li>
  );
};

const mapStateToProps = state => ({
  date: rationItemsSelectors.getRationDate(state),
});

const mapDispatchToProps = {
  onDeleteItem: rationItemsOperations.deleteRationItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(RationItem);
