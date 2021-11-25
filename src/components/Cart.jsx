import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from "../Actions/index";


export const Cart = ({ image, title, price, disc, elem, cutted }) => {
    const items = useSelector((state) => state.todoreducer.basket);
    console.log(items);

    const dispatch = useDispatch();

    return (
        <div className="p-2 m-2 card_main">
            <div className="card  " style={{ width: "300px" }}>
                <img src={image} className="card-img-top  " alt="..." style={{ width: "200px" }} />
                <div className="card-body mt-3 backg">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {disc} </p>
                    
                    <p className="card-text" style={{ fontWeight: "bold" }}>Price : {price}<span style={{
                        fontWeight: "normal",
                        marginLeft: "10px", textDecoration: "line-through", color: "grey"
                    }}>{cutted}</span> </p>

                    <button onClick={() => dispatch(addtocart(elem))} style={{
                        marginLeft: "40px",
                        fontWeight: "bold", fontFamily: "'Noto Sans', sans-serif"
                    }} type="button"
                        className="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}
