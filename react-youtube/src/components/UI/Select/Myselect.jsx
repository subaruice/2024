import React from "react";

const Myselect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value}
            onChange={e => onChange(e.target.value)} >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Myselect;
