import React from "react";
// import "./styles.scss";
import { Link } from "react-router-dom";


const PhoneItem = ({ phoneData, viewList }) => {
    const {
        _id,
        images,
        name,
        manufacturer,
        price,
        screen,
        ram,
        processor,
    } = phoneData;
    return (
        <Link
            to={`/item/${_id}`}
            className={!viewList ? "" : "container__item"}
        >
            <div className={viewList ? "itemContainer__list" : "itemContainer__grid"}>
                <img src={images} alt={`${name}`} className="itemImage" />
                <div className="item__data">
                    <h1 className="itemName itemTitle">{name}</h1>
                    {!viewList ? null : (
                        <>
                            <h1 className="itemName">{manufacturer}</h1>
                            <h1 className="itemName">{screen}</h1>
                            <h1 className="itemName">{processor}</h1>
                            <h1 className="itemName">{ram}gb</h1>
                            <h1 className="itemName">€{price}</h1>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};
export default PhoneItem;
