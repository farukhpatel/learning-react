import React from 'react'
import A from './A'
//HOC is higher order component in which you update the functionality of existing component 
const HOC=(ComponentABC)=>{
    const sem={
        semester:"6th",
        year:"3rd"
    }
    const STUDENT=()=>{
       return <ComponentABC hosem={sem}></ComponentABC>
    }
    return STUDENT;
}
export default HOC;