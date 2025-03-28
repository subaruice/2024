import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { privatRoutes, publicRoutes } from "../router/index";
import { AuthContext } from "./../context/index";

const AppRouter = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, []);

    return isAuth ? (
        <Routes>
            {privatRoutes.map((route, index) => (
                <Route key={index} element={route.element} path={route.path} />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route, index) => (
                <Route key={index} element={route.element} path={route.path} />
            ))}
        </Routes>
    );
};

export default AppRouter;
