import React from "react";

function ListOfNonRecommendedProducts({
  // productsNotRecommended,
  productsNotRecommended = ["Мучные", "Молоко", "Красное мясо", "Копченности"],
  stylesList,
}) {
  // console.log("productsNotRecommended", productsNotRecommended);

  return (
    <>
      {productsNotRecommended.map((products) => {
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
