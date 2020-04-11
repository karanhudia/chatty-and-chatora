import React from 'react';

const ReverseTextInput = ({onChange}) => {
    const handleChange = (e) => {
        const text = e.target.value;
        let count = 0;

        const regex1 = /([a-zA-Z]+)\s{1}([A-Z]+),/gm;
        const regex2 = /,\s([a-zA-Z]+)\s([A-Z]+)\s(\(\d{4}[a-z]?\))/gm;
        const regex3 = /(\(\d{4}\))\s/gm;

        count += text.match(regex1).length;
        let output = text.replace(regex1, (match, firstName, lastName) => `${firstName}, ${lastName.split('').join('. ')}.,`);

        count +=output.match(regex2).length;
        output = output.replace(regex2, (match, firstName, lastName, year) => ` & ${firstName}, ${lastName.split('').join('. ')}. ${year}`);

        count +=output.match(regex3).length;
        output = output.replace(regex3, "$1: ");

        onChange(output)

        alert(`Karan Hudia just helped you save ${count} matches and corrections.`)
    };

    return (
        <textarea onChange={handleChange} className="text-input"/>
    );
};

export default ReverseTextInput;