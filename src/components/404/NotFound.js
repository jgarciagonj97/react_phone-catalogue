import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/phones");
    }

    return (
        <div className="contenedor">
            <h2>¡UPS! You may want to go here...</h2>
            <div>
                <button type="button" className="btn btn-warning btn-block mt-4" onClick={handleClick}>
                    Go to catalogue
                    </button>
            </div>
        </div>
    );
};

export default NotFound;