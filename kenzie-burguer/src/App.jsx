import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { AxiosInstance } from "./requests/AxiosInstance";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function productList() {
      try {
        const response = await AxiosInstance.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    productList();
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <ul>
          {products.map((product) => (
            <Card
              id={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
              price={product.price}
            >
              <Button id={product.id}>Adicionar</Button>
            </Card>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
