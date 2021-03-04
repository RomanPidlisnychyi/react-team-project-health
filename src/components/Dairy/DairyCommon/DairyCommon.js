import React from 'react';
import styles from './DairyCommon.module.css';
import ProductInputForm from '../ProductInputForm/ProductInputForm';
import Rations from '../Rations/Rations';

const DairyCommon = () => <div className={styles.commonWrapper}>
    <div className={styles.dairyWrapper}>
        {/* Dairy components */}
        <ProductInputForm />
        <Rations />
    </div>
    <div className={styles.usersInfoWrapper}>
        {/* UsersInfo components */}
    </div>
</div>

export default  DairyCommon;