import {useState} from 'react';
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import {baseUrl, fetchApi} from "../utils/fetchApi";
import Add from '../components/Add';
import Button from '../components/Ui/Button/Button';

const Home = ({pizzaList, admin}) => {
  const [close, setClose] = useState(false);
  return (
    <>
      <Featured/>
      <div className='add'>
        <Button onClick={() => setClose(true)}>
          Добавить
        </Button>
      </div>
      <PizzaList pizzaList={pizzaList}/>
      {close && <Add setClose={setClose}/>}
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if (myCookie === process.env.TOKEN) {
    admin = true;
  }

  const res = await fetchApi(baseUrl);

  return {
    props: {
      pizzaList: res
    },
  }
}

export default Home;