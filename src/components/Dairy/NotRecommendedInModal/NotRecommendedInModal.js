import Button from '../../Button/Button';
import styles from './NotRecommendedInModal.module.css';

export default function NotRecommendedInModal({
  productName,
  handlerNotRecommended,
}) {
  return (
    <div className={styles.cover}>
      <div className={styles.modalCalories}>
        <div className={styles.modalCaloriesWrapper}>
          <h2 className={styles.headingCalories}>Внимание продукт:</h2>
          <div className={styles.wrapperCountedCalories}>
            <div className={styles.countedСalories}>
              <h3 className={styles.calories}>
                <p className={styles.unitOfEnergy}>{productName}</p>
              </h3>
            </div>
            <h2 className={styles.headingCalories}>
              В списке нерекомендуемыx!
            </h2>
            <p className={styles.text}>Добавить в рацион?</p>
            <div className={styles.buttonStartLosingWeightWrapper}>
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
        </div>
      </div>
    </div>
    // <div className={styles.container}>
    //   <div className={styles.content}>
    //     Продукт:
    //     <br />
    //     <span className={styles.name}>{productName}</span>
    //     <br />
    //     В списке не рекомендованных!
    //     <br />
    //     Хотите добавить его в рацион?
    //   </div>
    //   <br />
    //   <div className={styles.btnControl}>
    //     <Button
    //       circle={true}
    //       title={<div className={styles.title}>ДА</div>}
    //       onClick={() => handlerNotRecommended(true)}
    //     />
    //     <Button
    //       circle={true}
    //       title={<div className={styles.title}>НЕТ</div>}
    //       onClick={() => handlerNotRecommended(false)}
    //     />
    //   </div>
    // </div>
  );
}
