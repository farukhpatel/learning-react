//hook allows you to use react lifecycle methode and set state in functional componenet as well
import React,{useState,useEffect} from 'react'
const Hook=()=>{
    const [name,setName]=useState({name:'',surname:''})
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState([])
    const changeName=()=>{
        console.log("button work")
        setName({
            name:'frk',
            surname:'pat'
            
        })
    }
    const Increament=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        //useEffect methode work when componenet is rendered and state is changes
        console.log("useEffect methode work")
    });
    return(
        <div>
            {console.log("function render")}
            {name.name}  
            <br />
            {name.surname} <br />
            <button onClick={()=>{changeName()}}>Change name</button><br />
            <h1>hook in react</h1>
            <h1>count{count}</h1>
            <button onClick={()=>{Increament()}}>Increament</button><br />
            <button onClick={()=>{Decrement()}}>Decrement</button><br />

            
        </div>
    );
}
export default Hook