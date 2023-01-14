import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Shirt from '../Shirt/Shirt'
import'./Home.css'

const Home = () => {
    const shirts = useLoaderData()
  return (
    <div className='home-container'>
        <div className='shirt-container'>
            {
              shirts.map(shirt => <Shirt
                  key={shirt._id}
                  shirt={shirt}
                ></Shirt>)     
            }
          </div> 

        <div>
            <Cart></Cart>      
        </div>  
    </div>

  )
}

export default Home
