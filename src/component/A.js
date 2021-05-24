import React from 'react'
import B from './B'
import C from './C'
export const MyContext = React.createContext();
const A=()=>{
     const data={name:'farukh patel',roll:23}
    return(
        <div>
            <h1 >A Component</h1>
            <MyContext.Provider value={data}>
                <B></B>
                <C></C>
            </MyContext.Provider>
            <h1>content provider work finish</h1>
            {/* <B data={data}></B> */}
        </div>
    );
}
export default A;