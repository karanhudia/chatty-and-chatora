import React from 'react';

const TextInput = ({onChange}) => {
    const handleChange = (e) => {
        const text = e.target.value;

        const regex1 = /[,]([\s][a-zA-Z0-9])[.]([\s]?([a-zA-Z0-9])[.])?([\s]?([a-zA-Z0-9])[.])?/gm;
        const regex2 = /(\d{4}[a-z]?)(\)):/gm;
        const regex3 = /,? &/gm;
        const regex4 = /\s(\\([0-9]-?[0-9]?\\))/gm;

        let output = text.replace(regex1, "$1$3$5");
        output = output.replace(regex2, "$1$2");
        output = output.replace(regex3, ",");
        output = output.replace(regex4, "$1");

        onChange(output)
    };

    return (
        <textarea onChange={handleChange} className="text-input"/>
    );
};

export default TextInput;