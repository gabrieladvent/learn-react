import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const {
        classname = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        type = "text",
        name = "input",
        placeholder = "Placeholder",
    } = props;

    return (
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className={classname}
            ref={ref}
        />
    );
});

export default Input;
