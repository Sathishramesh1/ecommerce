export const cartReducer=(state,action)=>{
    switch (action.type) {
        case "add_to_cart":
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
            case "remove_from_cart":
                return {...state,cart:state.cart.filter(c=>c.id!==action.payload.id)}
            case "change_qty":
                return {...state,cart:state.cart.filter(c=>c.id===action.payload.id?(c.qty=action.payload.qty):c.qty)}
    
        default:
            return state;
        }
}

export const productreducer=(state,action)=>{
    switch (action.type) {
        case 'sort_by_price':
            return {...state,sort:action.payload};
            case 'sort_by_stock':
            return {...state,bystock:!state.bystock};
            case 'sort_by_delivery':
            return {...state,byfastdeliver:!state.byfastdeliver};
            case 'sort_by_rating':
            return {...state,byrating:action.payload};
            case 'sort_by_searchquery':
            return {...state,searchquery:action.payload};
            case 'clear_filter':
                return{
                    bystock:false,
                    byfastdeliver:false,
                    byrating:0,
                    searchquery:"",
 
                };
            
            
    
        default:
            return state;
    }

}