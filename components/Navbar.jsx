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


      </div>
      <div className={styles.item}>


      </div>

    </div>
  );
};

export default Navbar;