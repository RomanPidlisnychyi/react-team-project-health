export default function NotRecommendedCategoryList({
  productsNotRecommended = ['Мучные', 'Молоко', 'Красное мясо', 'Копченности'],
  stylesList,
}) {
  return (
    <ul>
      {productsNotRecommended.map(products => {
        return (
          <li className={stylesList} key={products}>
            {products}
          </li>
        );
      })}
    </ul>
  );
}
