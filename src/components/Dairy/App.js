import React from 'react';
import styles from './App.module.css';
import ProductInputForm from '../Dairy/ProductInputForm/ProductInputForm';
import Rations from '../Dairy/Rations/Rations';

const App = () => <div className={styles.commonWrapper}>
    <div className={styles.dairyWrapper}>
        {/* Dairy components */}
        <ProductInputForm />
        <Rations />
    </div>
    <div className={styles.usersInfoWrapper}>
        {/* UsersInfo components */}
    </div>
</div>

export default  App;
