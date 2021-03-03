import React from 'react';
import styles from './DairyCommon.module.css';
import App from '../App';

const DairyCommon = () => <div className={styles.commonWrapper}>
    <div className={styles.dairyWrapper}>
        {/* Dairy components */}
        <App />
    </div>
    <div className={styles.usersInfoWrapper}>
        {/* UsersInfo components */}
    </div>
</div>

export default  DairyCommon;