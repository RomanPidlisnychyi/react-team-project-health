export default function NotRecommendedProductsList({ list }) {
  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
