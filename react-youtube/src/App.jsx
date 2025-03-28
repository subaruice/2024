import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useContext, useState } from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
            }}
        >
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
