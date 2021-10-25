
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function HomeComponent() {
    const { user } = useSelector((state) => state.AppReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'GET_LOGIN_INFO' })
    }, [dispatch])

    return (
        <h1>Home{user.NAME}</h1>
    );
}

export default HomeComponent;
