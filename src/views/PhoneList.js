import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhones } from "../redux";

import PhoneItem from "../components/Phone/PhoneItem";
import Loading from "../components/Loading/Loading";

import "./PhoneList.scss";

const PhoneList = () => {
  const phonesData = useSelector(state => state.phoneReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return phonesData.loading ? (
    <Loading />
  ) : phonesData.error ? (
    <h2>{phonesData.error}</h2>
  ) : (
        <div className="phones">
          {phonesData.phones.map(phone => (
            <div className="phones_item" key={phone._id} data-cy="phone-item">
              <PhoneItem
                key={phone._id}
                name={phone.name}
                imageFileName={phone.imageFileName}
                description={phone.description}
                price={phone.price}
                screen={phone.screen}
                processor={phone.processor}
                ram={phone.ram}
              />
            </div>
          ))}
        </div>
      );
};

export default PhoneList;
