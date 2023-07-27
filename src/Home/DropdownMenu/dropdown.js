import React from 'react'; 
import {useNavigate} from 'react-router-dom'
import DropdownElement from './DropdownElement/dropdownElement';
import './dropdown.css'; 

const Dropdown = ({cartItems, openCart}) => {

    const navigate = useNavigate();

    const navigateToBlog = () => {
        navigate('/blog');
    };

    const navigateHome = () => {
        navigate('/');
    };

    return(
        <div className={`${openCart ? "outlook cart-items outlook--animation" : "outlook cart-items"}`}>
            
            { !cartItems.length ? 
                <div>
                    <div className='empty-cart'>Your cart is empty.</div>
                    <div >
                        <button onClick={navigateHome} className='button--go-home'>Add items</button> 
                    </div>
                </div> :

                <div>
                    {cartItems.map((item, index) => 
                        <DropdownElement item={item} key={index}/>
                    )}
                    <div >
                        <button onClick={navigateToBlog} className='button--go-cart'>Go to Checkout</button> 
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Dropdown; 