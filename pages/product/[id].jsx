import styles from '../../styles/Product.module.css';
import Image from "next/image";
import {useState} from "react";
import {baseUrl, fetchApi} from "../../utils/fetchApi";
import {useDispatch} from "react-redux";
import {addProducts} from "../../redux/reducers/cartSlice";
import Button from "../../components/Ui/Button/Button";

const Product = ({pizza}) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extra, setExtra] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  }

  //Логика счетчика цены
  const changePrice = (number) => {
    setPrice(price + number);
  }

//Собираем чекбоксы и обрабатываем при нажатии
  const handleCheckbox = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtra((prev) => [...prev, option])
    } else {
      changePrice(-option.price);
      setExtra((prev) => [...prev, option])
    }
  }

  //Цена с учетом размера
  const handleSize = (sizeIndex) => {
    const priceOfSize = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(priceOfSize)
  }

  const handleShop = () => {
    dispatch(addProducts({...pizza, price, quantity, extra}));
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout='fill' alt='pizza' objectFit='contain' priority/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>{price} RUB</span>
        <p className={styles.desc}>
          {pizza.desc}
        </p>
        <h3 className={styles.choose}>Выберите размер</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src='/img/size.png' alt='size' layout='fill' objectFit='contain'/>
            <span className={styles.number}>25см</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src='/img/size.png' alt='size' layout='fill' objectFit='contain'/>
            <span className={styles.number}>30см</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src='/img/size.png' alt='size' layout='fill' objectFit='contain'/>
            <span className={styles.number}>35см</span>
          </div>
        </div>
        <h3 className={styles.choose}>Выберите дополнительные ингридиенты</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions && pizza.extraOptions.map((option) =>
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleCheckbox(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          )}
        </div>
        <div className={styles.add}>
          <input type="number" min={1} defaultValue={1} className={styles.quantity} onChange={handleQuantity}/>
          <Button onClick={handleShop}>Добавить в корзину</Button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params}) => {
  const res = await fetchApi(`${baseUrl}/${params.id}`);
  return {
    props: {
      pizza: res
    }
  }
}

export default Product;