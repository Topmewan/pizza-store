import styles from '../styles/Details.module.css';
import {useState} from "react";
import Button from "./Ui/Button/Button";

const Details = ({total, createOrder}) => {

  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    createOrder({customer, address, total, method: 0})
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>За доставку +200р</h1>
        <div className={styles.item}>
          <label className={styles.label}>Имя Фамилия</label>
          <input
            type="text"
            placeholder='Имя заказчика'
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}> Номер телефона</label>
          <input
            type="text"
            placeholder='Номер телефона'
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Адрес</label>
          <textarea
            rows={5}
            type="text"
            placeholder='Введите адрес'
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <Button onClick={handleClick}>
          Оформить
        </Button>
      </div>
    </div>
  );
};

export default Details;