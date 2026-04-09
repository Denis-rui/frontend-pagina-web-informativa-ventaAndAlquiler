import "./Header.css";
import DarkModeBoton from "../DarkModeBoton";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <header>
        <img
          src={
            darkMode
              ? "./assets/img/modo-dark.jpeg"
              : "./assets/img/el-precioso-modo-light.jpeg"
          }
          alt="Logo El Precioso"
        />

        <nav>
          <ul>
            <li>
              <a className={darkMode ? "dark" : ""} href="#prendas-destacadas">
                Prendas
              </a>
            </li>
            <li>
              <a className={darkMode ? "dark" : ""} href="#acerca-de-nosotros">
                Acerca de nosotros
              </a>
            </li>
            <li>
              <a className={darkMode ? "dark" : ""} href="#contactanos">
                Contáctanos
              </a>
            </li>
          </ul>
        </nav>

        <DarkModeBoton darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
    </>
  );
};

export default Header;
