import React, { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
    const {
        title, type, name, placeholder
    } = props;

    return (
        <div className="mb-4">
            <Label htmlFor={name}>{title}</Label>
            <Input type={type} name={name} id={name} placeholder={placeholder} ref={ref}/>
        </div>
    );  
});

export default InputForm;
