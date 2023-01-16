import React, { useContext } from 'react';
import { RingContext } from '../Services/Services';

const My = () => {
    const ring = useContext(RingContext);
    console.log(ring)
    return (
        <div className='common_color' >
            <h3>My section</h3>
            <p>Gift :{ring}</p>
        </div>
    );
};

export default My;  