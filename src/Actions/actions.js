export const ADD_ITEM = 'ADD_ITEM';
export const VIEW_ITEMS = 'VIEW_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const additem = (item)=>({
    type: ADD_ITEM,
    payload: item,
});


export const viewitems = ()=>({
 
    type: VIEW_ITEMS,
       //console.log("view items in action");
   // payload: items,
});


// export const updateitem = (item)=>({
//     type: UPDATE_ITEM,
//     payload: item,
// });


export const deleteitem = (id)=>({
    type: DELETE_ITEM,
    payload: id,
});