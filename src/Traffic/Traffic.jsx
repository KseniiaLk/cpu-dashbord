import React, {useEffect, useState} from "react";
import "./Traffic.css";
import * as API from "../../api/api"

const Traffic = () => {
    const [traffic, setTraffic] = useState([]);
    useEffect(() => {
        const data = async () => {
            const data = await API.GetTraffic();
            setTraffic(data);
            console.log(data);
        }
        data();
    }, []);

    return (
        <div>
        <h1>{traffic}</h1> 
        </div>
    );
};

export default Traffic;