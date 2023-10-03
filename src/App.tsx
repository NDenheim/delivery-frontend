import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { Product } from "./data/types";
import { FormEvent, useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [chosenCategory, setChosenCategory] = useState<string>("");
  // const [search, setSearch] = useState<string>("");

  const getProducts = async () => {
    const url = `http://localhost:8080/products?`;

    let urlWithParams = url;

    if (chosenCategory) {
      urlWithParams += `category=${chosenCategory}`;
    }

    const res = await fetch(urlWithParams);
    const data = await res.json();
    setProducts(data);

    // if (data == "") {
    //   alert("Sorry! No products match you search :(");
    // }
  };

  useEffect(() => {
    getProducts();
  }, [chosenCategory]); // type search in here when filter sorted

  const handleClick = (event: FormEvent<HTMLButtonElement>) => {
    setChosenCategory(event.currentTarget.value);
    console.log(chosenCategory);
  };

  return (
    <HashRouter>
      <div className="app">
        <Nav handleClick={handleClick} />

        <Routes>
          <Route path="/" element={<Home products={products} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
