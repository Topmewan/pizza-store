import styles from '../styles/Featured.module.css';
import Image from "next/image";
import feat2 from '../public/img/feat2.png';
import feat3 from '../public/img/feat3.png';

const Featured = () => {

  const images = [
    feat3,
    feat2,
    feat3
  ]

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <Image src='/img/arrowl.png' alt='to left' layout='fill'/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((image, i) =>
            <Image src={image} key={i + 1} alt='featured' layout='fill'/>
          )}
        </div>

      </div>
      <div className={styles.arrowContainer}>
        <Image src='/img/arrowr.png' alt='to right' layout='fill'/>
      </div>
    </div>
  );
};

export default Featured;