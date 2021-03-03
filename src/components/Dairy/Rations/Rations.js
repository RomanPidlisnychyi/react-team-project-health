import React, { Component } from 'react';
import { connect } from 'react-redux';
import RationsItem from '../RationsItem/RationsItem.js';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';
import styles from './Rations.module.css';
// class Rations extends Component {

//     render() {
//         return (

//         )
//     }
// }

const Rations = ({ rations, onItemDelete }) => {
    const { rationItems } = rations;
    console.log('rations: ', rations);

    return (
        <>
            {rationItems &&
                <ul className={styles.rations}>
                    {rationItems.map(item => <li key={item._id}>
                        <RationsItem
                            _id={item._id}
                            title={item.title}
                            weight={item.weight}
                            calories={item.calories}
                            onItemDelete={onItemDelete}
                        />
                    </li>)}
                </ul>}
        </>
    )
}

const mapStateToProps = (state, ownprops) => ({
    rations: state.rations
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    onItemDelete: (_id) => dispatch(rationsItemOperations.rationsItemDelete(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Rations);