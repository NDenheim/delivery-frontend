import { Link } from "react-router-dom";
import "./MenuTile.scss";

type MenuTileProps = {
  id: number;
  image: string;
  name: string;
  //   description: string;
  price: number;
};

const MenuTile = ({ id, image, name, price }: MenuTileProps) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none", color: "#393336" }}>
      <div className="tile">
        <div>
          <img src={image} alt="Product Image" className="tile__image" />
        </div>
        <div className="tile__info">
          <h2>{name}</h2>
          {/* <p>{description}</p> */}
          <p>£{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuTile;
