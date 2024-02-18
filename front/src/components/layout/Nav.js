import '../../style/components/layout/Nav.css';
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div className="navegador">
        <ul>
          <li>
            <NavLink to="/" className={({isActive})=> isActive ? "activo" : undefined}><a>Inicio</a></NavLink>
          </li>
          <li>
            <NavLink to="/Tendencias"  className={({isActive})=> isActive ? "activo" : undefined}><a>Tendencias</a></NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className={({isActive})=> isActive ? "activo" : undefined}><a>Blog</a></NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className={({isActive})=> isActive ? "activo" : undefined}><a>Contacto</a></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
