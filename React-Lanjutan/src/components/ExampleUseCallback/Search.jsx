import { memo } from "react";

const Search = (props) => {
    const {onChange} = props;
    console.log('Search Render');

    return (
        <input type="text" onChange={(e) => onChange(e.target.value)} placeholder="Search..." />
    );
}

export default memo(Search);