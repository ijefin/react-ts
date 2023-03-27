import { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchData = async (): Promise<Array<data>> => {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
      return data
    }

    fetchData()

  }, []);

  console.log(products)

  return (
    <div className="App">
      {products.map((prod) => <Card key={prod.id} title={prod.name} price={prod.price} />)}
    </div>
  );
};
