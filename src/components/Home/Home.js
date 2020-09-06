import React from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/phones");
    };
    return (
       
    );
};

export default HomePage;