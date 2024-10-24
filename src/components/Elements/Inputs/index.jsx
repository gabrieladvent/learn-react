import React from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const {
        title, type, name, placeholder
    } = props;

    return (
        <div className="mb-4">
            <Label htmlFor={name}>{title}</Label>
            <Input type={type} name={name} placeholder={placeholder}/>
        </div>
    );  
};

export default InputForm;
