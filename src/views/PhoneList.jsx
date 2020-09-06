import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhones } from '../redux';
import { Link } from 'react-router-dom';

import PhoneItem from '../components/Phone/PhoneItem';

import './PhoneList.scss';

const PhoneList = () => {
  const phonesData = useSelector(state => state.phoneReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return phonesData.loading ? (
    <h1>Cargando</h1>
  ) : phonesData.error ? (
    <h2>{phonesData.error}</h2>
  ) : (
        <div className="phones">
          {phonesData.phones.map(phone => (
            <div className="phones_item" key={phone._id} data-cy="phone-item">
              <Link to={`/phones/${phone._id}`}>
                <PhoneItem
                  key={phone._id}
                  name={phone.name}
                  manufacturer={phone.manufacturer}
                  imageFileName={phone.imageFileName}
                />
              </Link>
            </div>
          ))}
        </div>
      );
};

export default PhoneList;
