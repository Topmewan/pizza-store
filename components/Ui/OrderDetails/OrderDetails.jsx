import styles from "./OrderDetails.module.css";

const OrderDetails = ({buttonText, totalPrice, subtotalPrice, discountPrice,children}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ваш заказ</h2>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>
          Промежуточный итог:
        </b>{subtotalPrice ? subtotalPrice : 0.00} RUB
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Скидка:</b>{discountPrice ? discountPrice : 0.00} RUB
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Итого:</b>{totalPrice ? totalPrice : 0.00} RUB
      </div>
      {children}
    </div>
  );
};

export default OrderDetails;