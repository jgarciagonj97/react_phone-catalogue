import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/phones");
    }

    return (
        <div className="container">
            <div className="row">
                <h2>¡UPS! You may want to say this...</h2>
                <button type="button" className="btn btn-primary btn-block" onClick={handleClick}>
                    Go home
        </button>
            </div>
        </div>
    );
};

export default NotFound;