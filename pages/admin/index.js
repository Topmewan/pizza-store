import Image from "next/image";
import {useEffect, useState} from "react";
import {fetchApi, baseUrl, orderUrl} from '../../utils/fetchApi';
import axios from 'axios';
import Button from '../../components/Ui/Button/Button';
import delIcon from '../../public/img/iconmonstr-trash-can-2.svg';
import editIcon from '../../public/img/iconmonstr-pencil-9.svg';

import styles from "../../styles/Admin.module.css";


const Admin = ({orders, products}) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Готовим", "В пути", "Доставлено"];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/${id}`);
      const newArr = pizzaList.filter((pizza) => pizza._id !== id)
      setPizzaList(newArr);
    } catch (e) {
      console.log(e)
    }
  }

  const handleStatus = async (id) => {
    const item = orderList.filter(order => order._id === id)[0];
    const currentStatus = item.status;
    try {
      const res = await axios.put(`${orderUrl}/${id}`, {status: currentStatus + 1});
      setOrderList([res.data, ...orderList.filter(order => order._id !== id)]);

    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Каталог</h1>
        <table className={styles.table}>
          <thead>
          <tr className={styles.trTitle}>
            <th>Фото</th>
            <th className={styles.trId}>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {pizzaList.map((product) => (
            <tr className={styles.trTitle} key={product._id}>
              <td>
                <Image
                  src={product.img}
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt=""
                />
              </td>
              <td className={styles.trId}>{product._id.slice(0, 5)}...</td>
              <td>{product.title}</td>
              <td>${product.prices[0]}</td>
              <td>
                <button className={styles.button}>
                  <Image src={editIcon} width={15} height={15} objectFit={'cover'}/>
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleDelete(product._id)}
                >
                  <Image src={delIcon} width={15} height={15}/>
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Заказы</h1>
        <table className={styles.table}>
          <tbody>
          <tr className={styles.trTitle}>
            <th>ID</th>
            <th className={styles.trId}>Заказчик</th>
            <th className={styles.method}>Итого</th>
            <th className={styles.method}>Оплата</th>
            <th>Статус</th>
            <th></th>
          </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
            <tr className={styles.trTitle}>
              <td>{order._id.slice(0, 5)}...</td>
              <td className={styles.trId}>{order.customer}</td>
              <td className={styles.method}>${order.total}</td>
              <td className={styles.method}>
                {order.method === 0 ? <span>Наличными</span> : <span>Онлайн</span>}
              </td>
              <td>{status[order.status]}</td>
              <td>
                <button
                  className={styles.buttonNext}
                  onClick={() => handleStatus(order._id)}
                >
                  Обновить статус
                </button>
              </td>
            </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await fetchApi(baseUrl);
  const orderRes = await fetchApi(orderUrl);

  return {
    props: {
      orders: orderRes,
      products: productRes
    },
  };
};

export default Admin;