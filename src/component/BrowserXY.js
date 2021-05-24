import React, { useEffect, useState } from 'react'
const BrowserXY=()=>{
    // const [X,setX]=useState(0);
    // const [Y,setY]=useState(0);
    const [set,setXY]=useState({X:0,Y:0})
    const mouseXY=(e)=>{
        console.log("mouse move")
        // console.log(e.clientX)
        // console.log(e.clientY)
        // setX(e.clientX)
        // setY(e.clientY)
        setXY({
            X:e.clientX,
            Y:e.clientY
        });


    }
    useEffect(()=>{
        console.log("useEffect");
        window.addEventListener('mousemove',mouseXY)
    }),[];  //[] this is call only one time when componnet is rendered not call when state is update
    return(
        <div>
            <h1>Browser X:-{set.X}</h1>
            <h1>Browser Y:-{set.Y}</h1>

        </div>
    );
}
export default BrowserXY;