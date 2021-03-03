import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Picker.module.css';
import { connect } from 'react-redux';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';

class Picker extends Component {
    state = {
        date: ''
    }

    handlerChangeInput = e => {
        const date = e.target.value.split('-'); 
        const transformedDate = [date[2], date[1], date[0]].join('-');
        console.log('transformedDate: ', transformedDate);
        
        // this.setState({ date: '25-02-2021'});
        // this.props.onGetInfo('25-02-2021');
        this.setState({ date: e.target.value});
        this.props.onGetInfo(transformedDate);
    }

    render() {
        const {date} = this.state;
        return (
            <input
                className={styles.inputDate}
                type="date"
                name="date"
                value={date}
                onChange={this.handlerChangeInput}
            />
        )
    }
}

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     }).isRequired)
// }
const mapStateToProps = (state) => ({
    rations: state.rations,
})

const mapDispatchToProps = {
    onGetInfo: rationsItemOperations.getInfoByDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker);

