import React from 'react'
import axios from 'axios';


class Data extends React.Component{
    constructor(){
        super();
        this.state={hits:[]}
    }
    componentDidMount(){
        console.log("component did mount work when component is rendered")
        axios.get('https://hn.algolia.com/api/v1/search?query=redux')
        .then((res)=>{
            console.log(res.data)
            this.setState({
                hits:res.data.hits  }
            )
        })
        .catch(err=>console.log(err))
    }
    render(){
        const {hits}=this.state;
        return(
            <div>
                <h1>Data</h1>
                {
                    hits.length? hits.map((d)=><li key={d.created_at}>{d.title}</li>) :console.log("no")
                }
                {/* {console.log(this.state.hits).map((i)=>console.log(i))} */}
                {console.log("in render part")}
                {/* {console.log(hits.map((item)=>{
                    console.log("item")
                    console.log(item.title)
                    return <li key={item.title}>{item.title}</li>
                }))} */}
                <h2>data finish</h2>

            </div>
        );
    }
}
export default Data