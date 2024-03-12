import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []);



    useEffect(() => {

        if(bottles.length){
            const storedCart = getStoredCart();
            
            const saveCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle);
                }
            }

            setCart(saveCart);
        }

    }, [bottles])


    const handleRemoveFromCart = id => {
        // visual cart remove 

        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart);
        
        // remove from local storage 
        removeFromLS(id);
    }

    const handleAddToCart = bottle => {
        setCart([...cart, bottle])
        addToLS(bottle.id);
    }
  
    return (
        <div>
            <h3>Memorable Water Bottle</h3>
            <h2>Bottles Available: {bottles.length}</h2>
            
            <div className="bottles">
                <div className="bottle-container bottle-single">
                    {
                        bottles.map(bottle => <Bottle 
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}>
                        </Bottle>)
                    }
                </div>

                <div className="side-bar">
                    <Cart cart={cart} 
                    handleRemoveFromCart={handleRemoveFromCart}>
                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Bottles;