const Label = (props) => {
    const {
        children = "Label",
        classname = "block text-gray-700 text-sm font-bold mb-2",
        htmlfor = "text",
    } = props;

    return (
        <label 
            htmlFor={`${htmlfor}`} 
            className={`${classname}`}
        >
        {children}
        </label>
    );
};

export default Label;
