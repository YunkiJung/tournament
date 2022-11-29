import { useState } from "react";
import Tournament from "../components/Tournament";


function ActiveList(){

    let fetchedData = [
        {
            title : 'Tournament1',
            creator : 'Yun'
        },
        {
            title : 'Tournament1',
            creator : 'Yun'
        }
    ]

    let [data, setData] = useState(fetchedData);


    return (
        <>
            {
                data.map((x)=>(
                    <Tournament></Tournament>
                ))
            }
        </>
    )
}

export default ActiveList;