import React from 'react'
import C from './C'
import {MyContext} from './A'
const B=(props)=>{
    return(
        <div>
            <h1>B componenet</h1>
            {console.log(MyContext)}
            <MyContext.Consumer>
                {data=><h1>{`my name is ${data.name} and roll number is ${data.roll} ${JSON.stringify(data)}` }</h1>}
            </MyContext.Consumer>
            {/* <h1>B Component {props.data.name} and roll number {props.data.roll}</h1> */}
            {/* <C data={props.data}></C> */}
            {/* {console.log(MyContext)} */}
            {/* <MyContext.Consumer> */}
            {/* {data=><h1>{data.name}</h1>} */}
            {/* </MyContext.Consumer> */}
        </div>

    );
}
export default B;