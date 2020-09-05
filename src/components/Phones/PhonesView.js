import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhones } from "../../redux/actions/fetchPhones.actions";
import Phone from "./Phones";

const PhoneList = () => {

    const dispatch = useDispatch();

    const phones = useSelector((state) => state.PhonesList.phoneList);
    const viewList = useSelector((state) => state.View.list);

    useEffect(() => {
        (async () => {
            dispatch(fetchAllPhones());
        })();
    }, [dispatch]);
    if (phones.length === 0)
        return (
            <div>
                <h2>No hay teléfonos guardados</h2>
            </div>
        );

    return (
        <div>
            {phones.map((phone) => (
                <Phone phoneData={phone} viewList={viewList} />
            ))}
        </div>
    )
};

export default PhoneList;