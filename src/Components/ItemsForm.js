import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../Actions/actions";
import { useSelector } from "react-redux";

const  ItemsForms = ()=>{
    const [name, setName] = useState('');
    const[description, setDescription ] = useState('');
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    
    const addItem = (e)=>{
        console.log("Add Item method in form");
        e.preventDefault();
        const itemId = Date.now().toString();
        const newItem = {
            id: itemId,
            name : name,
            description: description,
        };

        dispatch(additem(newItem));
        setDescription('');
        setName('');
       // console.log("item added is "+ newItem.name);
        console.log("items are "+ items.toString);
    };

    return(
        <div>
            <p>
                This is Items Form Component </p>
                    <br/>
                <form>
                    <div>
                    <label htmlFor =" name"> Name:</label>
                    <input type = "text" name = "name" value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                    <label htmlFor =" description"> Descrption:</label>
                    <input type = "text" name = "Description" value = {description}
                    onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <button type = "submit" onClick={addItem}>
                        Add Item
                    </button>
                </form>

            
        </div>
    )      
    
}

export default ItemsForms;