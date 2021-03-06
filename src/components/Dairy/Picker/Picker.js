import React from 'react';
import PropTypes from 'prop-types';
import styles from './Picker.module.css';

const Picker = ({ date, onChangeData }) =>
    <input
        className={styles.inputDate}
        type="date"
        name="date"
        value={date}
        onChange={onChangeData}
    />

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     }).isRequired)
// }

export default Picker;

