import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
    constructor() {
        super();
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
