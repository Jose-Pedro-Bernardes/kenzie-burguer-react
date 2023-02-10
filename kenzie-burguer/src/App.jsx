import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { AxiosInstance } from "./requests/AxiosInstance";
import { MainStyles } from "./styles/MainStyles";

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
    console.log(cart);
  }
  return (
    <div className="App">
      <Header />
      <MainStyles>
        <div>
          <section>
            <ul>
              {products.map((product) => (
                <Card
                  id={product.id}
                  img={product.img}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                >
                  <Button
                    onClick={() => addToCart(product)}
                    text="Adicionar"
                  ></Button>
                </Card>
              ))}
            </ul>
          </section>
        </div>
      </MainStyles>
    </div>
  );
}

export default App;
