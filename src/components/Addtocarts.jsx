import React from 'react';
import { useSelector } from 'react-redux';
import { SelectedItems } from "./SelectedItems";


export const Addtocarts = () => {
    const items = useSelector((state) => state.todoreducer.basket);

    return (
        <div>
            {items.length === 0 ? (
                <div className="container my-3 ">
                    <h2 className="text-center">Your shopping basket is empty</h2>
                </div>
            ) : (
                <div className="container  itmes_list">
                    <div className="container my-3 ">
                        <h2 className="text-center">You have ordered</h2>
                    </div>
                    {items.map((item,indx) => {

                        return <SelectedItems image={item.image}
                            title={item.title}
                            key={item.id}
                            price={item.price}
                            disc={item.disc}
                            indx={indx}  />
                    })}
                </div>
            )}


        </div>
    )
}
