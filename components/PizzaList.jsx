import styles from '../styles/PizzaList.module.css';
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ЛУЧШАЯ ПИЦЦА В ГОРОДЕ</h1>
      <p className={styles.desc}>
        Самая вкусная пицца,которую вы пробовали! Самые сочные и свежие ингредиенты! Налетай,покупай и кайфуй.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard
          imageUrl='/img/pizza.png'
          titleText='Пепперони'
          descText='Суперская пицца хули думать покупай'
          priceText='$19.0'
        />
        <PizzaCard
          imageUrl='/img/pizza.png'
          titleText='Гавайская'
          descText='Суперская пицца хули думать покупай'
          priceText='$20.0'
        />
        <PizzaCard
          imageUrl='/img/pizza.png'
          titleText='Четыре Сыра'
          descText='Суперская пицца хули думать покупай'
          priceText='$15.0'
        />
        <PizzaCard
          imageUrl='/img/pizza.png'
          titleText='Барбекю'
          descText='Суперская пицца хули думать покупай'
          priceText='$25.0'
        />
        <PizzaCard
          imageUrl='/img/pizza.png'
          titleText='Фристайло'
          descText='Суперская пицца хули думать покупай'
          priceText='$30.0'
        />
        <PizzaCard
          imageUrl='/img/pizza.png'
          titleText='Зенит'
          descText='Суперская пицца хули думать покупай'
          priceText='$35.0'
        />
      </div>

    </div>
  );
};

export default PizzaList;