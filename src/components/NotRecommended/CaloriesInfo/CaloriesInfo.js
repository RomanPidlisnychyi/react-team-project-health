import { useSelector } from 'react-redux';
import { rationItemsSelectors } from '../../../redux/rations';
import { notrecomendedproductsSelectors } from '../../../redux/notrecomendedproducts';
import styles from './CaloriesInfo.module.css';

export default function CaloriesInfo() {
  const date = useSelector(rationItemsSelectors.getRationDate);

  const info = useSelector(notrecomendedproductsSelectors.getComboInfo);

  return (
    <div className={styles.box}>
      <p className={styles.title}>Сводка за {date}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          {info.left >= 0 ? <p>Осталось </p> : <p>Сверх нормы</p>}
          <p className={styles.value}>{Math.abs(info.left)} ккал</p>
        </li>
        <li className={styles.item}>
          <p>Употребленно</p>
          <p className={styles.value}>{info.used} ккал</p>
        </li>
        <li className={styles.item}>
          <p>Дневная норма</p>
          <p className={styles.value}>{info.norma} ккал</p>
        </li>
        <li className={styles.item}>
          <p>n% от нормы</p>
          <p className={styles.value}>{Math.round(info.fromTheNorm)} %</p>
        </li>
      </ul>
    </div>
  );
}
