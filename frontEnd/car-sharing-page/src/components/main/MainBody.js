import Search from "./Search";
import DisplayBody from "./DisplayBody";
import React, { useState } from "react";
const MainBody = ({user}) => {
    const [displaySearch, setDisplaySearch] = useState(false);
    return (
        <>
            <Search />
            <DisplayBody displaySearch={displaySearch} user={user} />
        </>
    );
};

export default MainBody;
