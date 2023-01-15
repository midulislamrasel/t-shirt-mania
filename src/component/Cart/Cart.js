import React from 'react';

const Cart = ({cart,handelRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart Order summary</h3>
            <p>order Quantity : {cart.length}</p>
            {
                cart.map(shirt => <p
                    key={shirt._id}
                >
                    {shirt.name }
                    <button onClick={ () =>handelRemoveFromCart(shirt)} style={{ margin:"8px" }}>x</button>
                </p>)
            }
        </div>
    );
};

export default Cart;