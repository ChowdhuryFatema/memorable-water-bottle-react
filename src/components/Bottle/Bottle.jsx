import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {

    const {img, name, price, ratings} = bottle;
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <p>Ratings: {ratings}</p>
            <button onClick={() => handleAddToCart(bottle)}>Add To Cart</button>
        </div>
    );
};

Bottle.propTypes  = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;