import { useDispatch } from "react-redux";
import { viewitems, updateitem, deleteitem } from "../Actions/actions";
import { useSelector } from "react-redux";
import React from "react";

const  ItemsList = ()=>{
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
   
    const viewItems = ()=>{
        console.log("view Items method is called");
        console.log(items);
        dispatch(viewitems());
    }

    // const updateItem = (item)=>{
    //    // console.log("update Item method is called");
    //     const updateditem = {
    //         id: item.id,
    //         name: item.name,
    //         description: item.description,
    //       };
    //       console.log("uodated items is "+ updateItem);
    //     dispatch(updateitem(updateditem));


        
    //}

    const deleteItem = (id)=>{
        console.log("delete Item method is called");
        dispatch(deleteitem(id));
    }
    return(
        <div>
            <p>
                This is Items List Component
                </p>
                <button type = "submit" onClick={viewItems}>
                    View All Items
                </button>
            

            {Array.isArray(items) && items.length > 0 ? (
  <ul>
    {items.map(item => (
      <li key={item.id}>
      <p>{item.name} - {item.description}</p>
      {/* <button onClick={() => updateItem(item)}>Update</button> */}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
    ))}
  </ul>
) : (
  <p>No items to display</p>
)}

        </div>
    )      
    
}

export default ItemsList;