import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import { AuthContext } from "./../../context/index";

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = (e) => {
        e.preventDefault();
        setIsAuth(false);
        localStorage.removeItem("auth");
    };
    return (
        <div className="navbar">
            {isAuth && <button onClick={logout}>Выйти</button>}
            <div className="navbar__item">
                <Link to="/about">О нас</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
