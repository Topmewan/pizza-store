import styles from '../styles/Navbar.module.css';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='call' width='32' height='32'/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Заказывайте сейчас!</div>
          <div className={styles.text}>89775646</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Главная</li>
          <li className={styles.listItem}>Каталог</li>
          <li className={styles.listItem}>Меню</li>
          <Image src='/img/orlando-rage.svg' alt='cart' width='160px' height='69px'/>
          <li className={styles.listItem}>Новости</li>
          <li className={styles.listItem}>Блог</li>
          <li className={styles.listItem}>Контакты</li>
        </ul>

      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' alt='cart' width='30px' height='30px'/>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;