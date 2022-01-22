import styles from '../../styles/Order.module.css';
import OrderDetails from "../../components/Ui/OrderDetails/OrderDetails";
import Image from "next/image";
import {fetchApi, orderUrl} from "../../utils/fetchApi";
import Button from '../../components/Ui/Button/Button';

const Order = ({order}) => {
  const status = order.status;

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
            <thead>
            <tr className={styles.trTitle}>
              <th>ID Заказа</th>
              <th>Заказчик</th>
              <th>Адрес доставки</th>
              <th>Итого</th>
            </tr>
            </thead>
            <tbody>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>
              <td>
                <span className={styles.customer}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.address}>{order.address}</span>
              </td>
              <td>
                <span className={styles.total}>{order.total} RUB</span>
              </td>
            </tr>
            </tbody>
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
        <OrderDetails subtotalPrice={order.total} totalPrice={order.total}>
          <Button>
            Завершить
          </Button>
        </OrderDetails>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params}) => {
  const res = await fetchApi(`${orderUrl}/${params.id}`);
  return {
    props: {
      order: res
    }
  }
}

export default Order;