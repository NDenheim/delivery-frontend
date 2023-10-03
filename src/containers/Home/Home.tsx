import { FormEvent, useEffect, useState } from "react";
import MenuTile from "../../components/MenuTile/MenuTile";
import { Product } from "../../data/types";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

type HomeProps = {
  products: Product[];
};

// export const handleRender = (products: Product[]) => {
//   const items = products.map((product: any) => {
//     return (
//       <div>
//         <MenuTile
//           key={product.id}
//           product_name={product.product_name}
//           id={product.id}
//           image={product.image_url}
//           // description={product.description}
//           price={product.price}
//         />
//       </div>
//     );
//   });
//   return items;
// };

const Home = ({ products }: HomeProps) => {
  const [filter, setFilter] = useState<string>("");
  //   const [dropdown, setDropdown] = useState<string>("");

  const handleRender = (products: Product[]) => {
    const items = products.map((product: any) => {
      return (
        <div>
          <MenuTile
            key={product.id}
            name={product.name}
            id={product.id}
            image={product.image_url}
            // description={product.description}
            price={product.price}
          />
        </div>
      );
    });
    return items;
  };

  //   useEffect;

  //   const handleFilter = (event: FormEvent<HTMLInputElement>) => {
  //     const userInput = event.currentTarget.value.toLowerCase();
  //     setFilter(userInput);
  //   };

  //   let filteredProducts = products.filter((product) => {
  //     return product.product_name.toLowerCase().includes(filter);
  //   });

  let productTiles = handleRender(products);

  //   useEffect(() => {
  //     handleRender(filteredProducts);
  //   }, [filter]);

  return (
    <div className="home">
      {/* <SearchBar handleSearch={handleFilter} /> */}
      <h2>Our Menu</h2>
      <p>
        Please see below for our current product list. For individual
        information click on the product tile.
      </p>
      <section className="home__tiles">{productTiles}</section>
    </div>
  );
};

export default Home;
