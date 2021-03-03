import React, { Component } from 'react';
import styles from './WeightInput.module.css';

class WeightInput extends Component {
    state = {
        weight: ''
    }

    handleChangeInput = e => {
        e.preventDefault();
        this.setState({weight: e.target.value});
    }

    render() {
        return (<>
            <input name="weight"
                type="text"
                placeholder="Граммы"
                // autoComplete="off"
                className={styles.input}
                value={this.state.weight}
                onChange={this.handleChangeInput}
                // onClick={this.clearList}
            />
        </>
        )
    }
}

export default WeightInput;