import MenuTile from "../../components/MenuTile/MenuTile";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <p></p>
      <section className="all-tiles">
        {products.map((product) => (
          <MenuTile
            key={product.id}
            name={product.name}
            id={product.id}
            image={product.image_url}
            description={product.description}
            price={product.price}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
