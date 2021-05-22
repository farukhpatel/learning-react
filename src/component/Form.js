import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state={
            name:'',
            add:''

        }
    }
    // state = {
    //     name: '',
    //     add: ''
    // }
   
    change = (e) => {
        // console.log(e)

        console.log("on change work by one by")
        this.setState({
            name:e.target.value
            
            
        })
    }
    changeb = (e) => {
        // console.log(e)

        console.log("on change work by one by")
        this.setState({
            add:e.target.value
            
            
        })
    }
    submitt = (event) => {
        alert('A name was submitted: ');
        event.preventDefault();
        
    }

    render() {
        const {name,add}=this.state
        return (
            <div>
                
                <h1>form</h1>
                <form action="/form.php"methode="POST"onSubmit={()=>{this.submitt()}}>
                    <input type="text" value={name}   name="name" onChange={this.change}/ ><br />
                    <input type="text"  value={add} name="add" onChange={this.changeb}/><br />
                    <button type="submit">Submit form</button>
                
                </form>

            </div >
        )
    }
}
