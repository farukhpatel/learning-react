import React, { Component } from 'react'
import Form from './Form'
export default class CHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"farukh patel"
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerived from state")
        console.log(state.name="frk")
    }
    componentDidMount(){
        console.log("component did mount work when :-after componnet render")
    }
    render() {
        return (
            <div>
                {console.log("lifecycle componnet render")}
                <h1>Life Cycle methode of mounting</h1>
                {this.state.name}
                <Form></Form>
                
            </div>
        )
    }
}
