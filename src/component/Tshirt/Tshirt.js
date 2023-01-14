import React from 'react';
import './Tshirt.css'
const Tshirt = ({ tshirt }) => {
    const {id,name,picture} = tshirt;
    return (
        <div className='t-shirt'>
            <h1>{id}</h1>
            <h3>{name}</h3>
            <img src={picture} alt="" />
                <div>
                    <button>Buy this</button>
                </div>
        </div>
    );
};

export default Tshirt;