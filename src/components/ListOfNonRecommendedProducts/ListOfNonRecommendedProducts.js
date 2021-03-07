import React from 'react';

function ListOfNonRecommendedProducts({
  productsNotRecommended = ['Мучные', 'Молоко', 'Красное мясо', 'Копченности'],
  stylesList,
}) {
  return (
    <>
      {productsNotRecommended.map(products => {
        return (
          <li className={stylesList} key={products}>
            {products}
          </li>
        );
      })}
    </>
  );
}

export default ListOfNonRecommendedProducts;
