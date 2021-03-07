import React from 'react';
import { connect } from 'react-redux';
import RationItem from '../RationItem/RationItem';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './RationItemsList.module.css';
// import groupStyles from '../Transitions/group.module.css';
import PropTypes from 'prop-types';
import rationItemsSelectors from '../../redux/rations/rationItemsSelectors';

function RationItemsList({ rationItems }) {
  return (
    <>
      {rationItems && rationItems.length > 0 && (
        <ul className={styles.list}>
          {/* <TransitionGroup component="ul" /*className={styles.list}*/}
          {rationItems.map(item => (
            // <CSSTransition key={contact.id} timeout={250} /*classNames={groupStyles}*/>
            <RationItem key={item._id} item={item} />
            // </CSSTransition>
          ))}
          {/* </TransitionGroup> */}
        </ul>
      )}
    </>
  );
}

RationItemsList.propTypes = {
  rationItems: PropTypes.array,
};

const mapStateToProps = state => ({
  rationItems: rationItemsSelectors.getReversedItems(state),
});

export default connect(mapStateToProps)(RationItemsList);
