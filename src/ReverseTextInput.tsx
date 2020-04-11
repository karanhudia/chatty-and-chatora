import React from 'react';

const ReverseTextInput = ({onChange}) => {
    const handleChange = (e) => {
        const text = e.target.value;

        const regex1 = /([a-zA-Z]+)\s{1}([A-Z]+),/gm;
        const regex2 = /,\s([a-zA-Z]+)\s([A-Z]+)\s(\(\d{4}[a-z]?\))/gm;
        const regex3 = /(\(\d{4}\))\s/gm;
        // const regex4 = /\s(\\([0-9]-?[0-9]?\\))/gm;

        // const regexMatch1 = text.match(regex1);
        // let output = `${regexMatch1[1]}, ${regexMatch1[2].split('').join('. ')}`;
        let output = text.replace(regex1, (match, firstName, lastName) => `${firstName}, ${lastName.split('').join('. ')}.,`);
        output = output.replace(regex2, (match, firstName, lastName, year) => ` & ${firstName}, ${lastName.split('').join('. ')}. ${year}`);
        output = output.replace(regex3, "$1: ");
        // output = output.replace(regex4, "$1");

        onChange(output)
    };

    return (
        <textarea onChange={handleChange} className="text-input"/>
    );
};

export default ReverseTextInput;