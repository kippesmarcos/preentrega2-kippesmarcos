import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
    return (
        <div className="cartContainer">
            <IoCartOutline className="cartImg" />
            <p className="cartNumber">0</p>
        </div>
    )
}

export default CartWidget