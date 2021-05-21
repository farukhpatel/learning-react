import React, { useState, useEffect } from 'react'
import axios from 'axios';



const Covid = () => {
    const [data, setData] = useState({ hits: [] });
    console.log("covid-19")

    const getData = async () => {
        console.log("get data work")
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        );
        console.log(result.data)
        setData(result.data);
    }

    // useEffect(async () => {
    //     const result = await axios(
    //         'https://hn.algolia.com/api/v1/search?query=redux',
    //     );

    //     setData(result.data);
    // });

    return (
        <div>
            <h1>covid -19 </h1>
            <button onClick={() => getData()}>get covid data</button>
            <ul>
                {data.hits.map(item => (
                    <li >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Covid;