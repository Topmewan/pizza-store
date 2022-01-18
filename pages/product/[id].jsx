import styles from '../../styles/Product.module.css';
import Image from "next/image";
import {useState} from "react";

const cordPizza = {
  id: 1,
  img: '/img/pizza.png',
  name: 'Пепперони',
  price: [20.2, 23.5, 27.9],
  desc: 'fsfsfsfsgsgs'
}

const Product = () => {
  const [size, setSize] = useState(0);

  const handleChoose = (sizePrice) => {
    if (sizePrice === 0) {
      setSize(sizePrice);
    }
    if (sizePrice === 1) {
      setSize(sizePrice);
    }
    if (sizePrice === 2) {
      setSize(sizePrice);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={cordPizza.img} layout='fill' alt='pizza' objectFit='contain' priority/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{cordPizza.name}</h1>
        <span className={styles.price}>${cordPizza.price[size]}</span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur laborum nulla quis ratione sapiente.
          Accusantium ad alias amet assumenda consequatur culpa, debitis dolor enim exercitationem molestias natus
          nobis, soluta suscipit!
        </p>
        <h3 className={styles.choose}>Выберите размер</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleChoose(0)}>
            <Image src='/img/size.png' alt='size' layout='fill' objectFit='contain'/>
            <span className={styles.number}>25см</span>
          </div>
          <div className={styles.size} onClick={() => handleChoose(1)}>
            <Image src='/img/size.png' alt='size' layout='fill' objectFit='contain'/>
            <span className={styles.number}>30см</span>
          </div>
          <div className={styles.size} onClick={() => handleChoose(2)}>
            <Image src='/img/size.png' alt='size' layout='fill' objectFit='contain'/>
            <span className={styles.number}>35см</span>
          </div>
        </div>
        <h3 className={styles.choose}>Выберите дополнительные ингридиенты</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" id='double' name='double' className={styles.checkbox}/>
            <label htmlFor="double">Двойные ингредиенты</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id='spicy' name='spicy' className={styles.checkbox}/>
            <label htmlFor="double">Острый перец</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id='onion' name='onion' className={styles.checkbox}/>
            <label htmlFor="double">Чеснок</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id='garlic' name='garlic' className={styles.checkbox}/>
            <label htmlFor="double">Лук</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Product;