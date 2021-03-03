import React from 'react';
import ProductInputForm from './ProductInputForm/ProductInputForm';
import styles from './App.module.css';
import Picker from './Picker/Picker';
import Rations from './Rations/Rations';
// import Button from './Button/Button';

const App = () => (
    <div className={styles.App}>
        <Picker />
        <ProductInputForm />
        {/* <Rations /> */}
    </div>
)

export default App;
