import styles from '../styles/PizzaList.module.css';
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ЛУЧШАЯ ПИЦЦА В ГОРОДЕ</h1>
      <p className={styles.desc}>
        Самая вкусная пицца,которую вы пробовали! Самые сочные и свежие ингредиенты! Налетай,покупай и кайфуй.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.length > 0
          ? pizzaList.map((pizza) =>
            <PizzaCard
              key={pizza._id}
              pizzaId={pizza._id}
              imageUrl={pizza.img}
              titleText={pizza.title}
              descText={pizza.desc}
              priceText={pizza.prices[0]}
            />
          )
          : <h1>No data</h1>}
      </div>
    </div>
  );
};

export default PizzaList;