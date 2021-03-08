import React, { Component } from 'react';
import ProductInputForm from '../ProductInputForm/ProductInputForm';
import RationItemsList from '../../RationItemsList/RationItemsList';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

class DairyWrapper extends Component {
    state = {
        showModal: false,
        mode: 'usual',
    }

    handleClick = e => {
        this.setState({ showModal: true })
    }

    render() {
        const { mode } = this.state;

        return (<>
            <ProductInputForm mode='usual' />
            <RationItemsList />
            <ModalWrapper />
        </>
        ) 
    }
}

export default DairyWrapper;
