import React, { useState } from 'react'

const ToDo=()=>{
    const [inputFieldData,setInputFieldDatas]=useState("");
    const [items,setItems]=useState([]);
    const inputFields=(e)=>{
        console.log("input work");
        console.log(e.target.value);
        setInputFieldDatas(e.target.value);

    }
    const onAddItms=()=>{
        console.log("add to cart");
        console.log(inputFieldData)
        setItems([...items,inputFieldData]);
        console.log(items)
        setInputFieldDatas('');
    }
    const onDelete=(e,indexOfItem)=>{
        
        console.log(indexOfItem);
        console.log("on delete work");
       console.log(items)
       items.filter((data,index)=>{
        console.log(`this is data ${data}`)   
        console.log(`this is index ${index}`)
       })
       setItems(items.filter((data,index)=>{return index!==indexOfItem}))
    }
    return(
        <div style={{alignItems:'center'}}>
            <h1>To Do list</h1><br />
            <input type="text" value={inputFieldData} onChange={inputFields} />
            <button onClick={onAddItms}>Add List</button>
      <h1>  
             {items.map((data,index)=>{return <li key={index}>
                  {data}
                  <button onClick={(e)=>{onDelete(e,index)}}>Delete</button> 
                  </li>})}
      </h1>  
        </div>
    );
}
export default ToDo;