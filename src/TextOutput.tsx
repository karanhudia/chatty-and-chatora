import React from 'react';

const TextOutput = ({text}) => {
    return (
        <textarea className="text-output" value={text} />
    );
};

export default TextOutput;