import React from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/phones");
    };
    return (
        <div className="contenedor_home">
            < h1 > WELCOME TO THE FIRST PHONE CATALOGUE DEVELOPED BY GUIDESMITHS</h1 >
        </div>
    );
};

export default HomePage;