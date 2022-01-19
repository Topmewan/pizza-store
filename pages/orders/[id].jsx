import styles from '../../styles/Order.module.css';
import OrderDetails from "../../components/Ui/OrderDetails/OrderDetails";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>ID Заказа</th>
              <th>Исполнитель</th>
              <th>Адрес доставки</th>
              <th>Итого</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>12143242</span>
              </td>
              <td>
                <span className={styles.customer}>Kaif Kaif</span>
              </td>
              <td>
                <span className={styles.address}>Nevsky pr. 9/1 </span>
              </td>
              <td>
                <span className={styles.total}>$65.00</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src='/img/paid.png' width={30} height={30} alt='paid'/>
            <span>Оплачено</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} alt=''/>
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src='/img/bake.png' width={30} height={30} alt='paid'/>
            <span>Готовим</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} alt=''/>
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src='/img/bike.png' width={30} height={30} alt='paid'/>
            <span>Заказ в пути</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} alt=''/>
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src='/img/delivered.png' width={30} height={30} alt='paid'/>
            <span>Заказ доставлен</span>
            <div className={styles.checkedIcon}>
              <Image src='/img/checked.png' width={20} height={20} alt=''/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <OrderDetails buttonText='Оплатить'/>
      </div>
    </div>
  );
};

export default Order;