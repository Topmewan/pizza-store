import {useState, useEffect} from "react";
import {reset} from "../../redux/reducers/cartSlice";
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import {useRouter} from 'next/router';

import styles from '../../styles/Cart.module.css';
import Image from "next/image";
import OrderDetails from "../../components/Ui/OrderDetails/OrderDetails";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Button from "../../components/Ui/Button/Button";
import Details from "../../components/Details";

const Cart = () => {
  const cart = useSelector(state => state.cartReducer);
  const [cash, setCash] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const amount = cart.total;
  const currency = "RUB";
  const style = {"layout": "vertical"};

  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data);
      res.status === 201 && router.push('/orders/' + res.data._id)
      dispatch(reset());
    } catch (e) {
      console.log(e)
    }
  }

  const ButtonWrapper = ({currency, showSpinner}) => {
    const [{options, isPending}, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);


    return (<>
        {(showSpinner && isPending) && <div className="spinner"/>}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              })
            });
          }}
        />
      </>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
          <tr className={styles.trTitle}>
            <th>Товар</th>
            <th>Название</th>
            <th>Дополнительно</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Итого</th>
          </tr>
          </thead>
          <tbody>
          {cart.products.map(product =>
            <tr className={styles.tr} key={product._id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image src={product.img} layout='fill' objectFit='cover' alt='pizza' priority/>
                </div>
              </td>
              <td>
                <span className={styles.name}>{product.title}</span>
              </td>
              <td>
                {product.extra && product.extra.map(ingred =>
                  <span className={styles.extras} key={ingred.id}>{ingred.text} </span>
                )}
              </td>
              <td>
                <span className={styles.price}>{product.price} RUB</span>
              </td>
              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>{cart.total && cart.total} RUB</span>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <OrderDetails totalPrice={cart.total} subtotalPrice={cart.total}>
          {open ? (
            <div className={styles.paymentMethods}>
              <Button onClick={() => setCash(true)} clsnm={'a'}>
                Оплата курьеру
              </Button>
              <PayPalScriptProvider
                options={{
                  "client-id": "Af3ChWncOhgATsUr18uOs_gFU-PxQhDwt1zICSlsCdYQyH9rIPZDg-R20afORIT4gTFQzi1nB40-b2Uk",
                  components: "buttons",
                  currency: 'RUB',
                  "disable-funding": "credit,card"
                }}
              >
                <ButtonWrapper
                  currency={currency}
                  showSpinner={false}
                />
              </PayPalScriptProvider>
            </div>
          ) : (
            <Button onClick={() => setOpen(true)}>
              Оплатить сейчас
            </Button>
          )}
        </OrderDetails>
      </div>
      {cash && <Details total={cart.total} createOrder={createOrder}/>}
    </div>
  );
};

export default Cart;