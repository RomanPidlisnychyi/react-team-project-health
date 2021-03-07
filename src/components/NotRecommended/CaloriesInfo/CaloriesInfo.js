import { useSelector } from 'react-redux';
import rationItemsSelectors from '../../../redux/rations/rationItemsSelectors';
import styles from './CaloriesInfo.module.css';

export default function CaloriesInfo() {
  const date = useSelector(rationItemsSelectors.getRationDate);
  return (
    <div>
      <h2>Сводка за {date}</h2>
      <ul className={styles.list}>
        <li>Осталось 000 ккал</li>
        <li>Употребленно 000 ккал</li>
        <li>Дневная норма 000 ккал</li>
        <li>n% от нормы 000 ккал</li>
      </ul>
    </div>
  );
}
