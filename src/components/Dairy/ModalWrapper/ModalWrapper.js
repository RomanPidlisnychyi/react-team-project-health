import { useState } from 'react';
import Button from '../../Button/Button';
import NewModal from '../../Modal/NewModal';
import ProductInputForm from '../ProductInputForm/ProductInputForm';
import styles from './ModalWrapper.module.css';

const ModalWrapper = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className={styles.button}>
        <Button title="+" onClick={() => setIsModal(!isModal)} circle={true} />
      </div>

      {isModal && (
        <NewModal onModalClose={setIsModal}>
          <ProductInputForm mode="modal" />
        </NewModal>
      )}
    </>
  );
};

export default ModalWrapper;
