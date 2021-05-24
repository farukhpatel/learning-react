import React from 'react'
import B from './B'
import C from './C'
import HOC from './HOC'
export const MyContext = React.createContext();
const A=(props)=>{
    console.log(props)
     const data={name:'farukh patel',roll:23,propsData:props}
    return(
        <div>
            <h1 >A Component {props.hosem.year},{props.hosem.semester}</h1>
            <MyContext.Provider value={data}>
                <B></B>
                <C></C>
            </MyContext.Provider>
            <h1>content provider work finish</h1>
            {/* <B data={data}></B> */}
        </div>
    );
}
export default HOC(A);