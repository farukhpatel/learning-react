import React, { useState } from 'react'
const Form=()=>{
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [showName,setShowName]=useState("");
    const [showLastName,setLastShowName]=useState("");

    const inputName=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const inputLastName=(event)=>{
        console.log(event.target.value)
        setLastName(event.target.value)   
    }
    // const onClicks=()=>{
    //     console.log("on submit work")
    //     setShowName(name)
    // }
    const onSubmits=(event)=>{
        event.preventDefault();
        console.log("on submit work")
        setShowName(name);
        setLastShowName(lastName);
    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>Form  {showName} {showLastName}</h1> <br /><br /><br />
            <form onSubmit={onSubmits}>
            <label htmlFor="Enter your name">Enter your name</label><br />
            <input type="text" onChange={inputName} />
            <label htmlFor="Enter your name">Enter your lastname</label><br />
            <input type="text" onChange={inputLastName} />
            <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Form






















// import React, { Component } from 'react'
// import axios from 'axios'
// export default class Form extends Component {
//     constructor() {
//         super();
//         this.state={
//             name:'',
//             add:''

//         }
//     }
//     // state = {
//     //     name: '',
//     //     add: ''
//     // }
   
//     change = (e) => {
//         // console.log(e)

//         console.log("on change work by one by")
//         this.setState({
//             name:e.target.value
            
            
//         })
//     }
//     changeb = (e) => {
//         // console.log(e)

//         console.log("on change work by one by")
//         this.setState({
//             add:e.target.value
            
            
//         })
//     }
//     submitt = (event) => {
//         const article="jjjj"
//         axios.post('https://reqres.in/api/articles',article).then(res=>console.log(res)).catch(err=>console.log(err))
//         alert('A name was submitted: ');
//         event.preventDefault();

        
//     }

//     render() {
//         const {name,add}=this.state
//         return (
//             <div>
                
//                 <h1>form</h1>
//                 <form onSubmit={()=>{this.submitt()}}>
//                     <input type="text" value={name}   name="name" onChange={this.change}/ ><br />
//                     <input type="text"  value={add} name="add" onChange={this.changeb}/><br />
//                     <button type="submit">Submit form</button>
                
//                 </form>

//             </div >
//         )
//     }
// }
