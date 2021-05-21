import React from 'react'
import axios from 'axios'
class State extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "loading data"
        }
    }

    componentDidMount() {
        console.log("component did moubt work ")
        this.setState({
            msg: "updated data in component did mount"
        })
    }
    componentDidUpdate() {
        console.log("componnet update")

    }
    update() {
        console.log("update method work")
    }
    render() {
        return (
            <div>
                <h1>State in React learning</h1>
                <h1>{this.state.msg}</h1>


                <button onClick={() => { this.update() }}>load data</button>
            </div >
        );
    }
}
export default State;
