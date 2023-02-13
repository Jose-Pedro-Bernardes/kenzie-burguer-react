import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { AxiosInstance } from "./requests/AxiosInstance";
import { MainStyles } from "./styles/MainStyles";
import Cart from "./components/Cart";
import arrow from "./assets/left.png";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    async function productList() {
      try {
        const response = await AxiosInstance.get("products");
        setProducts(response.data);
        setAllProducts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    productList();
  }, []);

  function searchProducts(products) {
    if (searchValue === "") {
      setProducts(allProducts);
      return;
    }
    const filteredProducts = products.filter(
      (product) =>
        product.name
          .normalize("NFD")
          .toLowerCase()
          .replace(/[\u0300-\u036f]/g, "")
          .includes(searchValue) ||
        product.category
          .normalize("NFD")
          .toLowerCase()
          .replace(/[\u0300-\u036f]/g, "")
          .includes(searchValue)
    );

    setSearchResult(searchValue);
    setProducts(filteredProducts);
    setSearch("");
  }

  function handleSearch(event) {
    setSearch(
      event.target.value
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "")
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchProducts(allProducts);
  }

  function showAllProducts() {
    setProducts(allProducts);
  }

  function addToCart(product) {
    if (!cart.find((productF) => productF.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  function removeProduct(id) {
    setCart(cart.filter((product) => product.id !== id));
  }

  function removeAllCart() {
    setCart([]);
  }

  return (
    <div className="App">
      <Header
        handleSubmit={handleSubmit}
        inputValue={searchValue}
        handleSearch={handleSearch}
      />
      <MainStyles>
        <div>
          {products === allProducts ? null : (
            <div className="searchResultHeader">
              <Button onClick={showAllProducts} classN="allProductsBtn">
                <img
                  src={arrow}
                  alt="Seta indicando a voltar para todos os produtos "
                />
              </Button>
              <h1>
                Resultado Para: <span>"{searchResult}"</span>
              </h1>
            </div>
          )}
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
          <Cart
            removeAllCart={removeAllCart}
            removeProduct={removeProduct}
            cart={cart}
          />
        </div>
      </MainStyles>
    </div>
  );
}

export default App;
