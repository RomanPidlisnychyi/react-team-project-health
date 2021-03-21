import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import RationItem from '../RationItem/RationItem';
import rationItemsSelectors from '../../redux/rations/rationItemsSelectors';
import styles from './RationItemsList.module.css';

function RationItemsList({ rationItems }) {
  return (
    <TransitionGroup
      component="ul"
      className={styles.list}
      in={rationItems.length}
    >
      {rationItems.map(item => (
        <CSSTransition key={item.title} classNames={styles} timeout={250}>
          <RationItem item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

RationItemsList.propTypes = {
  rationItems: PropTypes.array,
};

const mapStateToProps = state => ({
  rationItems: rationItemsSelectors.getReversedItems(state),
});

export default connect(mapStateToProps)(RationItemsList);
