import { useState } from 'react';
import NewModal from '../Modal/NewModal';
export default function NotRecommended() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <h1>Hello from Notrecommended</h1>
      <button type="button" onClick={() => setIsModal(!isModal)}>
        Modal
      </button>
      {isModal && (
        <NewModal onModalClose={setIsModal}>
          <h2>Hello from modal</h2>
        </NewModal>
      )}
    </>
  );
}
