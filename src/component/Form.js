import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
    constructor() {
        super();
        // this.state={

        // }
    }
    state = {
        name: '',
        add: ''
    }
    value = (e) => {
        console.log("on change work")
    }

    render() {
        return (
            <div>
                {console.log("form render methode work")}
                <h1>form</h1>
                <form>
                    <input type="text" /><br />
                    <input type="text" /><br />

                    <input type="submit" onSubmit={this.value} />
                </form>

            </div >
        )
    }
}
