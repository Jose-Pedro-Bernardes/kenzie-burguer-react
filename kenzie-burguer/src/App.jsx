import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { AxiosInstance } from "./requests/AxiosInstance";
import { MainStyles } from "./styles/MainStyles";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [inputValue, setInput] = useState("");

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

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeProduct(id) {
    setCart(cart.filter((product) => product.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <MainStyles>
        <div>
          <section>
            <ul>
              {products.map((product) => (
                <Card product={product}>
                  <Button
                    onClick={() => addToCart(product)}
                    text="Adicionar"
                  ></Button>
                </Card>
              ))}
            </ul>
          </section>
          <Cart removeProduct={removeProduct} cart={cart} />
        </div>
      </MainStyles>
    </div>
  );
}

export default App;
