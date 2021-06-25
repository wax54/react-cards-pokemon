import React, { useState } from 'react';

const useFlip = (initState = true) => {
    const [ state, setState ] = useState(initState);
    const toggleState = () => {
        setState(state => !state);
    };
    return [state, toggleState];
};

export { useFlip }