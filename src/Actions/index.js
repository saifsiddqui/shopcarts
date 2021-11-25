export const addtocart = (data) =>{
    return{
        type : "ADD_TO_CART",
        payload: data
    }
}

export const removecart = (indx) =>{
    return{
        type : "REMOVE_FROM_CART",
        indx
    }
}

