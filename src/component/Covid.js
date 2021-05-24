import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BrowserXY from './BrowserXY'
import A from './A'
import B from './B'
import C from './C'

const Covid = () => {
    const [data, setData] = useState([]);
    console.log("covid-19")

    const getData = async () => {
        console.log("get data work")
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        );
        console.log(result.data.hits)
        setData(result.data.hits);
    }

    // useEffect(async () => {
    //     const result = await axios(
    //         'https://hn.algolia.com/api/v1/search?query=redux',
    //     );

    //     setData(result.data);
    // });

    return (
        <div>
            {/* <BrowserXY></BrowserXY> */}
            <h1>covid -19 </h1>
            <button onClick={() => getData()}>get covid data</button>
            <ul>
                {data.map(item => (
                    <li key={item.created_at}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <A></A>
            {/* <B></B>
            <C></C> */}

        </div>
    );
}
export default Covid;