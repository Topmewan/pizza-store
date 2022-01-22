import styles from '../../styles/Login.module.css';
import {useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import Button from '../../components/Ui/Button/Button';

const values = {
  username: '',
  password: ''
}

const Login = () => {

  const [formValues, setFormValues] = useState(values);
  const [error, setError] = useState(false);
  const router = useRouter();
  console.log(formValues.username, formValues.password)

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {

    const admin = {
      username: formValues.username,
      password: formValues.password
    }

    try {
      await axios.post('http://localhost:3000/api/login', admin);
      router.push('/admin');
    } catch (e) {
      setError(true);
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Панель Администратора</h1>
        <input
          type="text"
          className={styles.input}
          placeholder='Логин'
          name='username'
          value={formValues.username}
          onChange={handleChange}
        />
        <input
          type="password"
          className={styles.input}
          placeholder='Пароль'
          name='password'
          value={formValues.password}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>
          Войти
        </Button>
        {error && <span className={styles.error}>Неверные данные,попробуйте снова!</span>}
      </div>
    </div>
  );
};

export default Login;