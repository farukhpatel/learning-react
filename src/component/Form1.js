import React, { useState } from 'react'
const Form1=()=>{
    const [formData,SetFormData]=useState({
        fname:'',lname:'',email:''
    })
    const onClicks=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        let value = e.target.value;
        SetFormData({...formData,[e.target.name]:e.target.value})
        //e.preventDefault()
        //e.stopPropagation()
    }
    const onSubmits=(e)=>{
        console.log("submit")
        console.log(formData)
        e.preventDefault();
    }
    return(
        <div>
            <h1>form1  {formData.fname} {formData.lname} {formData.email}</h1>
            <form onSubmit={onSubmits}>
            <label htmlFor="">Enter </label> <br />
            <input type="text" name="fname"  onChange={onClicks} /><br />
            <label htmlFor="">Enter </label> <br />
            <input type="text" name="lname"  onChange={onClicks} /><br />
            <label htmlFor="">Enter </label> <br />
            <input type="text" name="email"  onChange={onClicks} /><br />
            <button type="submit">Submit</button>
            </form>

        </div>
    );
}
export default Form1


