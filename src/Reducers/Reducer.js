
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, VIEW_ITEMS } from '../Actions/actions';

const initialState = {
    items : [],
};

const Reducer  = (state = initialState, action)=>{
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };


            case VIEW_ITEMS:
            return state;

            // case UPDATE_ITEM:
            //     const updateditems = state.items.map(
            //         (item)=> item.id === action.payload.id ? action.payload : item
            //     );
            //     return{
            //         ...state,
            //         items:updateditems,
            //                     };
                                
            case DELETE_ITEM:
                    const remainingitems = state.items.filter((item)=>item.id!==action.payload);
                    return{
                        ...state,
                        items:remainingitems,
                    };
                default: 
                return state;
    }
};

export default Reducer;