import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Header = () => {
    const items = useSelector((state) => state.todoreducer.basket);

    return (
        <div className=" header d-flex alighn-item-center  ">
            <p className="title ">Shopping Cart</p>

            <div className="basket d-flex mt-3">
                <Link to="/carts">
                    <FaShoppingCart style={{ fontSize: "25px", color: "white" }} />
                </Link>

                <span style={{ marginLeft: "10px", fontWeight: "bold", color: "white" }}>{items.length}</span>
            </div>
        </div>
    )
}






