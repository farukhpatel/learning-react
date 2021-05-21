import React from 'react'
import './Style.css'
function Stylesheet(props) {
    let className = props.isValue ? '' : 'demo';
    const style = {
        color: "red",
        fontSize: "45px",
        backgroundColor: "brown "
    }
    return (
        <div>
            <h1 className={className}>react Stylesheet learning mode
            </h1>
        </div>
    )
}

export default Stylesheet
