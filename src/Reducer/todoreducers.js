const initialState ={
    basket:[]
}

const todoreducer = (state=initialState, action) =>{
    switch(action.type){
        case "ADD_TO_CART":  

            return{
                ...state,
                basket:[...state.basket, action.payload  ]
            }

        case "REMOVE_FROM_CART":
            
            let baski = state.basket;
            const temp = baski.filter((ele,index)=> index !== action.indx)

            return{
                ...state,
                basket: temp,
            }
        default:
            return state    
    }
}
export default todoreducer;