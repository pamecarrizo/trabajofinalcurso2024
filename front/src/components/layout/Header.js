import '../../style/components/layout/Header.css';
import React from "react";
import logo from "../assets/img/logo.png";

const Header = (props) => {
    return (
        <header>
            <div className="Encabezado">
                <img src={logo} alt="logo" width={100}/>
                <h1>Realzar nuestra belleza nunca fue tan sencillo</h1>
            </div>
        </header>
    );
}

export default Header;