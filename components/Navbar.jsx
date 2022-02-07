import {useEffect} from 'react';
import styles from '../styles/Navbar.module.css';
import Image from "next/image";
import Link from 'next/link';
import {useSelector} from "react-redux";

const Navbar = () => {
  const {quantity} = useSelector(state => state.cartReducer);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default;
      sr(
        {origin: 'top', distance: '100px', duration: 1000, reset: false}).reveal(`.list`, {
        opacity: 0, cleanup: true
      });

      sr({origin: 'left', distance: '100px', duration: 2000, reset: false}).reveal(`.brand`, {
        opacity: 0, cleanup: true
      });
      sr({origin: 'right', distance: '100px', duration: 2000, reset: false}).reveal(`.cart`, {
        opacity: 0, cleanup: true
      });
    }
    animate();
  }, [])

  return (
    <div className={styles.container}>
      <div className={`${styles.item} brand`}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='call' width='32' height='32'/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Заказывайте сейчас!</div>
          <div className={styles.text}>89775646</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={`${styles.list} list`}>
          <Link href={'/'}>
            <li className={styles.listItem}>Главная</li>
          </Link>
          <Image src='/img/orlando-rage.svg' alt='cart' width='160px' height='69px'/>
          <Link href={'/admin'}>
            <li className={styles.listItem}>Админ Панель</li>
          </Link>
        </ul>
      </div>
      <Link href={'/cart'} passHref>
        <div className={styles.item}>
          <div className={`${styles.cart} cart`}>
            <Image src='/img/cart.png' alt='cart' width='30px' height='30px'/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;