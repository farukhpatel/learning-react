import React from 'react'

//this product component render in Registration component
class Product extends React.Component{
    constructor(){
        super();
        this.state={
            qty:0
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps)  //give previous value of props
        console.log(prevState); //give previous value of state
        console.log("componentDidUpdate")  //componentDidUpdate call when changes in props or state

    }
    //this methode is work when component is rendered
    static getDerivedStateFromProps(state,props){
        console.log(state)
        console.log(props)
        console.log("getDerivedStateFromProps")
    }
    render(){
        const updateQty=()=>{
            console.log("update value")
            //if we are commenting this methode this.setState then componentDidUpdate not call
            this.setState({
                qty:this.state.qty+1
            })
        }
        return (
            <div>
                <h1>Product Componnet</h1>
                <h2>Cart {this.state.qty}</h2>
                <button onClick={()=>updateQty()}>Update cart value</button>
            </div>
        );
    }
} 
export default Product