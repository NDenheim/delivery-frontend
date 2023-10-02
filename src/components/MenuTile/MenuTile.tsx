import { Link } from "react-router-dom";
import "./MenuTile.scss";

type MenuTileProps = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
};

const MenuTile = ({ id, image, name, description, price }: MenuTileProps) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <div className="tile">
        <img src={image} alt="Product Image" className="tile__image" />
        <div className="tile__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuTile;
