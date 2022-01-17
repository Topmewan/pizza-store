import styles from '../styles/Footer.module.css';
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.png' layout='fill' alt='kaif' objectFit='cover'/>
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Ждем вас в гости!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Адреса ресторанов
          </h1>
          <p className={styles.text}>
            Ул.Проффесора Попова д.9/1
            <br/>Санкт-Петербург, 85869
            <br/> 89313142553
          </p>
          <p className={styles.text}>
            Ул.Проффесора Попова д.9/1
            <br/>Санкт-Петербург, 85869
            <br/> 89313142553
          </p>
          <p className={styles.text}>
            Ул.Проффесора Попова д.9/1
            <br/>Санкт-Петербург, 85869
            <br/> 89313142553
          </p>
          <p className={styles.text}>
            Ул.Проффесора Попова д.9/1
            <br/>Санкт-Петербург, 85869
            <br/> 89313142553
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Рабочие часы</h1>
          <p className={styles.text}>
            ПН-ПТ
            <br/>9:00-23:00
          </p>
          <p className={styles.text}>
            СБ-ВС
            <br/>12:00-24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;