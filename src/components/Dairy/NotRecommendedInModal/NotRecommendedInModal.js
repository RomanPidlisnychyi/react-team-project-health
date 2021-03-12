import Button from '../../Button/Button';
import styles from './NotRecommendedInModal.module.css';

export default function NotRecommendedInModal({
  productName,
  handlerNotRecommended,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Продукт:
        <br />
        <span className={styles.name}>{productName}</span>
        <br />
        В списке не рекомендованных!
        <br />
        Хотите добавить его в рацион?
      </div>
      <br />
      <div className={styles.btnControl}>
        <Button
          circle={true}
          title={<div className={styles.title}>ДА</div>}
          onClick={() => handlerNotRecommended(true)}
        />
        <Button
          circle={true}
          title={<div className={styles.title}>НЕТ</div>}
          onClick={() => handlerNotRecommended(false)}
        />
      </div>
    </div>
  );
}
