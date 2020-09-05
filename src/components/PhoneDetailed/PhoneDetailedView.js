import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOnePhone } from "../../redux/actions/fetchPhones.actions";
import PhoneProfile from "../../components/PhoneDetailed/PhoneDetailed";


const PhoneDetailed = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    let phone = useSelector((state) => state.Phone.phone);
    const phoneList = useSelector(
        (state) => state.PhonesList.phoneList
    );

    //IF PHONES HAVEN'T BEEN FETCHED, FETCHED THE ONE THAT MATCHES THE ID

    useEffect(() => {
        if (phoneList.length === 0) {
            (async () => {
                await dispatch(fetchOnePhone(id));
            })();
        }
    }, [dispatch, phoneList, id]);

    // IF PHONES HAVE BEEN FETCHED USE FIND THE ONE THAT MATCHES THE ID

    if (phoneList.length > 0) {
        phone = phoneList.find((phone) => phone._id === id);
    }

    //IF THERE'S NO PHONE SHOW THE LOADING COMPONENT

    // if (!phone) {
    //     return <h1>Hola</h1>;
    // }
    return (
        <div>
            <PhoneProfile phone={phone} />
        </div>
    );
};
export default PhoneDetailed;
