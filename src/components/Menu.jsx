import {React, useState} from "react";

function Menu({items , onClick}){
    

    const [selectItem, setItem] = useState(null);
    return (
        <div className="categories">
              <ul>
                <li 
                onClick = {()=>setItem(null)}
                className={selectItem === null ? 'active' : ''}>Все</li>
                {items && items.map((name, index)=>(
                    <li
                     className={selectItem === index ? 'active' : ''}
                     onClick = {() => setItem(index)}
                     key={`${name}_${index}`}>{name}</li>
                ))}
              </ul>
        </div>
    )
}

export default Menu;