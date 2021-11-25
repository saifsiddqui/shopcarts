import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removecart } from "../Actions/index";

export const SelectedItems = ({ image, title, disc, price, key,indx }) => {
    const items = useSelector((state) => state.todoreducer.basket);
    console.log(items);

    const dispatch = useDispatch();
    return (
        <div className=" card_main2" >
            <div className="m-4 d-flex justify-content-between">
                <div className="d-flex">
                    <img src={image} alt="..." style={{ width: "200px" }} />
                    <div className="d-flex flex-column align-items-center" style={{ marginLeft: "20px", marginTop: "80px" }}>
                        <h5 className="mb-4" style={{ color: "red" }}>{title}</h5>
                        <p>{disc}</p>
                        <p style={{ fontWeight: "bold", marginTop: "-15px" }}>Price : {price}</p>
                    </div>
                </div>
                <button style={{
                    width: "130px", height: "40px", fontWeight: "bold", backgroundColor: "red", border: "none",
                    fontFamily: "'Noto Sans', sans-serif", marginTop:"110px"
                }} onClick={() => dispatch(removecart(indx))}
                    type="button" className="btn btn-primary">REMOVE</button>
            </div>

        </div>
    )
}
