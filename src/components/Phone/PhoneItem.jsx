import React from 'react';

import './PhoneItem.scss';

const PhoneItem = ({ name, manufacturer, imageFileName }) => {
  return (
    <div className="phone">
      <div className="phone_container">
        <div className="phone_name">
          <h2>{name}</h2>
        </div>
        <div className="phone_image">
          <img src={imageFileName} alt={name} />
        </div>
        <div className="phone_manufacturer">
          <h2>{manufacturer}</h2>
        </div>
      </div>
    </div>
  );
};

export default PhoneItem;
