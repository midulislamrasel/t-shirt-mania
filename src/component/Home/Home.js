import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
            {
                tshirts.map(tshirt => <Tshirt
                    key={tshirt.id}
                    tshirt={tshirt}
                ></Tshirt>)
            }
            </div>
            <div className="card-container">
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;