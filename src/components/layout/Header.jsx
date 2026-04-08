import "./Header.css";
import DarkModeBoton from "../DarkModeBoton";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <header>
        <img
          src="./assets/img/el-precioso-modo-light.jpeg"
          alt="Logo El Precioso"
        />

        <nav>
          <ul>
            <li>
              <a href="#prendas-destacadas">Prendas</a>
            </li>
            <li>
              <a href="#acerca-de-nosotros">Acerca de nosotros</a>
            </li>
            <li>
              <a href="#contactanos">Contáctanos</a>
            </li>
          </ul>
        </nav>

        <DarkModeBoton />
      </header>
    </>
  );
};

export default Header;
