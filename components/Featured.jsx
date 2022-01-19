import {useState} from "react";
import Image from "next/image";

import feat2 from '../public/img/feat2.png';
import feat3 from '../public/img/feat3.png';
import feat1 from '../public/img/feat1.png';
import feat4 from '../public/img/feat4.png';
import feat5 from '../public/img/feat5.png';

import styles from '../styles/Featured.module.css';

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    feat1,
    feat2,
    feat3,
    feat4,
    feat5
  ]

  //функционал слайдера(проверяем индексы)
  const handleArrow = (param) => {
    if (param === 'l') {
      setIndex(index !== 0 ? index - 1 : 4)
    }
    if (param === 'r') {
      setIndex(index !== 4 ? index + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow('l')}>
        <Image src='/img/arrowl.png' alt='to left' layout='fill' objectFit='contain'/>
      </div>
      <div className={styles.wrapper} style={{transform: `translateX(${-100 * index}vw`}}>
        {images.map((image, i) =>
          <div className={styles.imgContainer} key={i + 1}>
            <Image src={image} alt='featured' layout='fill' priority objectFit='contain'/>
          </div>
        )}
      </div>
      <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow('r')}>
        <Image src='/img/arrowr.png' alt='to right' layout='fill' objectFit='contain'/>
      </div>
    </div>
  );
};

export default Featured;