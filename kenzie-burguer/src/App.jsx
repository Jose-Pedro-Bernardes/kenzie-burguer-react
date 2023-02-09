import Card from "./components/Card";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { AxiosInstance } from "./requests/AxiosInstance";

function App() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="App">
      <Header />
      <ul>
        {products.map((product) => (
          <Card
            id={product.id}
            img={product.img}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
