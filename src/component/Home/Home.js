import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Shirt from '../Shirt/Shirt'
import'./Home.css'

const Home = () => {
    const shirts = useLoaderData()
    const [cart, setCard] = useState([])
    const handelAddToCart = shirt => {
        const exists = cart.find(ts => ts._id === shirt._id);
        if (exists) {
          alert('T -shirt already exists')
        }
        else {
          const newCart = [...cart, shirt];
          setCard(newCart)
        }
    }
  
  const handelRemoveFromCart = shirts => { 
    const remaining = cart.filter(ts => ts._id !== shirts._id);
    setCard(remaining)
  }


  return (
    <div className='home-container'>
        <div className='shirt-container'>
            {
              shirts.map(shirt => <Shirt
                  key={shirt._id}
                  shirt={shirt}
                  handelAddToCart={handelAddToCart}
                ></Shirt>)     
            }
          </div> 

        <div>
            <Cart
              cart={cart}
              handelRemoveFromCart={handelRemoveFromCart}
            ></Cart>      
        </div>  
    </div>

  )
}

export default Home
