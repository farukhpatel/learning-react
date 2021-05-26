import React from 'react'
const Items=(props)=>{
    
    return(
        
        <div>
        <li key={props.index}>{props.data}</li>

        </div>
    );

}
export default Items;