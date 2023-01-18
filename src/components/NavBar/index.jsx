import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({categories, weekday='sunday'}) => {

    console.log(categories);
    console.log(weekday);

    return (
        <div>
            <p>{categories[1]}</p>
            <p>{weekday}</p>
            <CartWidget/>
        </div>
    )
}

export default NavBar