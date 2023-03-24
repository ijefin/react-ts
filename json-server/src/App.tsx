import { EventHandler, useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

export const App = () => {

  interface data {
    id: number
    name: string
    price: number
  }

  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState(Array<data>);
  const [name, setproductName] = useState(String)
  const [price, setproductPrice] = useState(Number)

  useEffect(() => {
    const fetchData = async (): Promise<Array<data>> => {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
      return data
    }

    fetchData()

  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    const newProduct = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct)
    })

    console.log(res)
  }

  return (
    <>
      <div className="App">
        {products.map((prod) => <Card key={prod.id} title={prod.name} price={prod.price} />)}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="productName">
            Nome:
          </label>
          <input type="text" name="productName" value={name} onChange={(e) => setproductName(e.target.value)} />
          <label htmlFor="productPrice">
            Preço:
          </label>
          <input type="number" id="productPrice" onChange={(e) => setproductPrice(parseInt(e.target.value))} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>

  );
};
