import "./PrendasDestacadas.css";

const PrendasDestacadas = () => {
  return (
    <>
      <section id="prendas-destacadas">
        <h3>Prendas destacadas</h3>
        <div className="filtros">
          <label htmlFor="todos" className="activo">
            <input type="radio" name="categoria" id="todos" />
            <span className="opcion">Todos</span>
          </label>

          <label htmlFor="damas">
            <input type="radio" name="categoria" id="damas" />
            <span>Damas</span>
          </label>

          <label htmlFor="caballeros">
            <input type="radio" name="categoria" id="caballeros" />
            <span>Caballeros</span>
          </label>

          <label htmlFor="niños">
            <input type="radio" name="categoria" id="niños" />
            <span>Niños</span>
          </label>

          <label htmlFor="niñas">
            <input type="radio" name="categoria" id="niñas" />
            <span>Niñas</span>
          </label>
        </div>
        <div className="prendas">
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/vestido-2.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Vestido Maya
              </a>
              <p className="categoria">Damas</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/caballero-1.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Terno Modelo Smocking
              </a>
              <p className="categoria">Caballeros</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/niño-q.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Terno Modelo Smocking de niño
              </a>
              <p className="categoria">Niños</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/vestido-1.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Vestido Brilli
              </a>
              <p className="categoria">Damas</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/vestido-3.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Vestido Atlany
              </a>
              <p className="categoria">Damas</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/corbatas-1.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Corbatas de vestir de niño
              </a>
              <p className="categoria">Niños</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/niña-1.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Vestido mini quinceañera
              </a>
              <p className="categoria">Niñas</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
          <div className="tarjeta">
            <a href="#" className="miniatura-prenda">
              <img src="./assets/img/caballero-2.jpeg" alt="prenda" />
            </a>
            <div className="inhtmlFormacion-prenda">
              <a href="#" className="nombre-prenda">
                Terno Modelo Smocking
              </a>
              <p className="categoria">Caballeros</p>
            </div>
            <div className="boton-ir">
              <a href="#" className="ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                </svg>
                Ver detalles
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrendasDestacadas;
