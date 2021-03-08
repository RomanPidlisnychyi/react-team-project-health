import { useState } from 'react';
import { useSelector } from 'react-redux';
import { notrecomendedproductsSelectors } from '../../redux/notrecomendedproducts';
import CaloriesInfo from './CaloriesInfo/CaloriesInfo';
import NotRecommendedCategoryList from './NotRecommendedCategoryList/NotRecommendedCategoryList';
import NotRecommendedProductsList from './NotRecommendedProductsList/NotRecommendedProductsList';
import NewModal from '../Modal/NewModal';
import styles from './NotRecommended.module.css';

export default function NotRecommended() {
  const [isModal, setIsModal] = useState(false);
  const [products, setProducts] = useState(null);

  const categories = useSelector(
    notrecomendedproductsSelectors.getListNotProducts,
  );

  return (
    <div className={styles.wrapper}>
      <CaloriesInfo />
      <NotRecommendedCategoryList
        title={'Нерекомендуемые продукты'}
        categories={categories}
      />
      {isModal && (
        <NewModal onModalClose={setIsModal}>
          <NotRecommendedProductsList />
        </NewModal>
      )}
    </div>
  );
}
