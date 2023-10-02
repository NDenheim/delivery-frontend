import "./Nav.scss";
import Logo from "../../assets/bq-logo.png";

type NavProps = {};

const Nav = () => {
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
          <li>BURGERS</li>
          <li>SIDES</li>
          <li>DRINKS</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
