import React, { createContext } from 'react';
import Grandfather from '../Grandfather/Grandfather';
import './Services.css'
 export const RingContext = createContext('GrindFather Ring')

const Services = () => {
    
    return (
        <RingContext.Provider value='Gold Ring'>
            <div className='common_color'>
                <h3>This is Services</h3>
                <Grandfather></Grandfather>
            </div>
        </RingContext.Provider>
           
    );
};

export default Services;