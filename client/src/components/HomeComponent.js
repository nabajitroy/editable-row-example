
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProcureToPayProcessComponent from './ProcureToPayProcess/ProcureToPayProcessComponent';
function HomeComponent() {
    const dispatch = useDispatch();
    useEffect(() => {
    }, [dispatch])

    return (
        <ProcureToPayProcessComponent />
    );
}

export default HomeComponent;
