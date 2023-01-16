import React from 'react';

const Cart = ({ cart, handelRemoveFromCart }) => {
    let massage;
    if (cart.length === 0) {
      massage = <p>please buy at least one item</p>
    }
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
            {
                massage
            }
        </div>
    );
};

export default Cart;