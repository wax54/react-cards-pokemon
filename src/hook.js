import React, { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useFlip = (initState = true) => {
    const [ state, setState ] = useState(initState);
    const toggleState = () => {
        setState(state => !state);
    };
    return [state, toggleState];
};

const useAxios = (baseUrl) => {
    const [fetchedData, setFetchedData] = useState([]);
    const getNewData = async (urlEndPoint ="") =>{
        const response = await axios.get( `${baseUrl}${urlEndPoint}` );
        setFetchedData(data => [...data, { ...response.data, id: uuid() }]);
    }
    return [ fetchedData, getNewData ]
};


export { useFlip, useAxios }