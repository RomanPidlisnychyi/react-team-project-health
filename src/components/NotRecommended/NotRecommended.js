import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  notrecomendedproductsSelectors,
  notrecomendedproductsOperations,
} from '../../redux/notrecomendedproducts';
import { authSelectors } from '../../redux/auth';
import CaloriesInfo from './CaloriesInfo/CaloriesInfo';
import NotRecommendedCategoryList from './NotRecommendedCategoryList/NotRecommendedCategoryList';
import NotRecommendedProductsList from './NotRecommendedProductsList/NotRecommendedProductsList';
import NewModal from '../Modal/NewModal';
import styles from './NotRecommended.module.css';

export default function NotRecommended() {
  const [isModal, setIsModal] = useState(false);
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);

  const categories = useSelector(
    notrecomendedproductsSelectors.getListNotProducts,
  );

  const bloodGroup = useSelector(authSelectors.getParams).bloodGroup;

  const onTabHandler = e => {
    const category = e.target.textContent;

    notrecomendedproductsOperations
      .getNotRecommendedProductListByCategory(category, bloodGroup)
      .then(products => {
        setProducts(products);
        setIsModal(true);
        setCategory(category);
      });
  };

  return (
    <div className={styles.wrapper}>
      <CaloriesInfo />
      <NotRecommendedCategoryList
        title={'Нерекомендуемые продукты'}
        onTabHandler={onTabHandler}
      />
      {isModal && (
        <NewModal onModalClose={setIsModal}>
          <NotRecommendedProductsList
            products={products}
            category={category}
            onModalClose={setIsModal}
          />
        </NewModal>
      )}
    </div>
  );
}
