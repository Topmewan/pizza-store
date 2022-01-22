import styles from './Button.module.css';

const Button = ({children, onClick,clsnm}) => {
  return (
    <button className={clsnm ? styles.payButton : styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;