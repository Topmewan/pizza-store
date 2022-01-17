import styles from '../styles/PizzaCard.module.css';
import Image from "next/image";

const PizzaCard = ({imageUrl,titleText,priceText,descText}) => {
  return (
    <div className={styles.container}>
      <Image src={imageUrl} alt='pizza' width='500' height='500'/>
      <h1 className={styles.title}>{titleText}</h1>
      <span className={styles.price}>{priceText}</span>
      <p className={styles.desc}>{descText}</p>
    </div>
  );
};

export default PizzaCard;