import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  notrecomendedproductsSelectors,
  notrecomendedproductsOperations,
} from '../../../redux/notrecomendedproducts';
import { authSelectors } from '../../../redux/auth';
import NewModal from '../../Modal/NewModal';
import NotRecommendedProductsList from '../NotRecommendedProductsList/NotRecommendedProductsList';
import styles from '../NotRecommended.module.css';

export default function NotRecommendedCategoryList({ title }) {
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
    <div className={styles.categoryBox}>
      <p className={styles.title}>{title}</p>
      {categories.length > 0 ? (
        <ol className={styles.list}>
          {categories.map(category => (
            <li className={styles.item} key={category}>
              <span
                title="Подробнее ..."
                onClick={onTabHandler}
                className={styles.span}
              >
                {category}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <span>Введите свои параметры...</span>
      )}
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
