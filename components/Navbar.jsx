import styles from '../styles/Navbar.module.css';
import Image from "next/image";
import Link from 'next/link';
import {useSelector} from "react-redux";

const Navbar = () => {
  const {quantity} = useSelector(state => state.cartReducer);
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
          <Link href={'/'}>
            <li className={styles.listItem}>Главная</li>
          </Link>
          <li className={styles.listItem}>Каталог</li>
          <li className={styles.listItem}>Меню</li>
          <Image src='/img/orlando-rage.svg' alt='cart' width='160px' height='69px'/>
          <li className={styles.listItem}>Новости</li>
          <li className={styles.listItem}>Блог</li>
          <li className={styles.listItem}>Контакты</li>
        </ul>
      </div>
      <Link href={'/cart'} passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='cart' width='30px' height='30px'/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;