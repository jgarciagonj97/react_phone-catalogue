import React from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/phones");
    };
    return (
        <div>
            <div className="contenedor_home">
            </div>
            <div className="titulo">
                <h1> WELCOME TO THE FIRST PHONE CATALOGUE DEVELOPED BY GUIDESMITHS </h1 >
            </div>
        </div>
    );
};

export default HomePage;