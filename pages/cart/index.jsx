import styles from '../../styles/Cart.module.css';
import Image from "next/image";
import OrderDetails from "../../components/Ui/OrderDetails/OrderDetails";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Товар</th>
            <th>Название</th>
            <th>Дополнительно</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Итого</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='pizza'/>
              </div>
            </td>
            <td>
              <span className={styles.name}>Пепперони</span>
            </td>
            <td>
              <span className={styles.extras}>Лук,чеснок</span>
            </td>
            <td>
              <span className={styles.price}>$20.00</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$40.00</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <OrderDetails buttonText='Детали заказа'/>
      </div>
    </div>
  );
};

export default Cart;