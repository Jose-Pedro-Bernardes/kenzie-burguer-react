import axios from "axios";
import Button from "../../components/Button";

export const AxiosInstance = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

async function renderAllProducts() {
  try {
    const response = await AxiosInstance.get("/products");
    const products = response.data;

    const createProduct = products.map((product) => {
      <li key={product.id}>
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <div>
          <h2>{product.name}</h2>
          <p>R${product.category}</p>
          <h3>
            {parseFloat(product.price).toFixed(2).toString().replace(".", ",")}
          </h3>
        </div>
        <Button>Adicionar</Button>
      </li>;
    });
  } catch (error) {
    console.log(error.message);
  }
}
