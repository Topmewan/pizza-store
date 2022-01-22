import styles from '../styles/PizzaCard.module.css';
import Image from "next/image";
import Link from 'next/link';
const PizzaCard = ({imageUrl, titleText, priceText, descText,pizzaId}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizzaId}`} passHref>
        <Image className={styles.image} src={imageUrl} alt='pizza' width='500' height='500'/>
      </Link>
      <h1 className={styles.title}>{titleText}</h1>
      <span className={styles.price}>{priceText} RUB</span>
      <p className={styles.desc}>{descText}</p>
    </div>
  );
};

export default PizzaCard;