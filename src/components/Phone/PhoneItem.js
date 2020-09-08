import React from "react";

import "./PhoneItem.scss";

const PhoneItem = ({ name, imageFileName, description, price, screen, processor, ram }) => {
  return (
    <div className="phone">
      <div className="phone_container">
        <div className="phone_name">
          <h2>{name}</h2>
        </div>
        <div className="phone_image">
          <img src={imageFileName} alt={name} />
        </div>
        <div>
          <p>{description}</p>
          <h4>Specs:</h4>
          <ul className="specs">
            <li>Screen: {screen}</li>
            <li>Processor: {processor}</li>
            <li>RAM: {ram}GB</li>
          </ul>
          <h5>Price: {price}€</h5>
        </div>
      </div>
    </div>
  );
};

export default PhoneItem;
