import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>BOOTCAMP 2021</h4>
            <h1 className="list-unstyled">
              <li>Tecsup- Código</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Productos</h4>
            <ui className="list-unstyled">
              <li>Hombres</li>
              <li>Mujeres</li>
              <li>Niños</li>
              <li>Extra-large</li>              
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Accesorios</h4>
            <ui className="list-unstyled">
              <li>Joyería</li>
              <li>Sandalias</li>
              <li>Juguetes</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} EDU FALCON | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
