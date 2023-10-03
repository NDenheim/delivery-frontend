import "./Nav.scss";
import Logo from "../../assets/burger-queen.png";
import { MouseEventHandler } from "react";

type NavProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

const Nav = ({ handleClick }: NavProps) => {
  return (
    <nav className="nav">
      <div className="nav__heading">
        {/* <div className="nav__account">
          <ul className="nav__account--buttons">
            <li>Register</li>
            <li>Login</li>
          </ul>
        </div> */}
        <div className="nav__title">
          <img
            src={Logo}
            alt="Burger Queen Logo"
            className="nav__title--logo"
          />
          <p className="nav__title--text">Burger Queen</p>
        </div>
      </div>
      <div className="nav__menu">
        <ul className="nav__menu--buttons">
          <button onClick={handleClick}>BURGERS</button>
          <button onClick={handleClick}>SIDES</button>
          <button onClick={handleClick}>DRINKS</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
