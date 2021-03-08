import { useSelector } from 'react-redux';
import { rationItemsSelectors } from '../../../redux/rations';
import { notrecomendedproductsSelectors } from '../../../redux/notrecomendedproducts';
import styles from './CaloriesInfo.module.css';

export default function CaloriesInfo() {
  const date = useSelector(rationItemsSelectors.getRationDate);

  const info = useSelector(notrecomendedproductsSelectors.getComboInfo);
  return (
    <div>
      <h2>Сводка за {date}</h2>
      <ul className={styles.list}>
        <li>
          {info.left > 0 ? 'Осталось' : 'Сверх нормы'} {Math.abs(info.left)}
          ккал
        </li>
        <li>Употребленно {info.used} ккал</li>
        <li>Дневная норма {info.norma} ккал</li>
        <li>n% от нормы {Math.round(info.fromTheNorm)} %</li>
      </ul>
    </div>
  );
}
