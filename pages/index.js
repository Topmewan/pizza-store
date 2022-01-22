import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import {baseUrl, fetchApi} from "../utils/fetchApi";

const Home = ({pizzaList}) => {
  return (
    <>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetchApi(baseUrl);
  return {
    props: {
      pizzaList: res
    }
  }
}

export default Home;