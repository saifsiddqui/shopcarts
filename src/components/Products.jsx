import React from 'react';
import Data from '../Data';
import { Cart } from "./Cart";
import { useSelector } from 'react-redux';


export const Products = () => {

    const list = useSelector((beta) => beta.todoreducer.state)
    console.log(list);

    return (
        <>
            
                <div className="container my-3 ">
                    <h1 className="text-center">Our items</h1>
                </div>
                <div className="d-flex justify-content-center">
                    {Data.map((elem) => {
                        return <Cart image={elem.image}
                            title={elem.title} 
                            key={elem.id}
                            price={elem.price}
                            disc={elem.disc}
                            cutted={elem.cutted}
                            elem={elem} />
                            
                    })}
                </div>
            
        </>

    )
}
