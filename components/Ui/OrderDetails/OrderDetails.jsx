import styles from "./OrderDetails.module.css";

const OrderDetails = ({buttonText}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ваш заказ</h2>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>
          Промежуточный итог:
        </b>$79.0
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Скидка:</b>$19.0
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Итого:</b>$65.0
      </div>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default OrderDetails;