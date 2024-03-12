import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="cart">
            <h4>Add Cart: {cart.length}</h4>
            <div className='cart-container'>
                {
                    cart.map(bottle => {
                        return (
                            <div key={bottle.id} className='add-cart'>
                                <img src={bottle.img}></img>
                                <h3>Name: {bottle.name}</h3>
                                <p>Price: {bottle.price}</p>
                                <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;