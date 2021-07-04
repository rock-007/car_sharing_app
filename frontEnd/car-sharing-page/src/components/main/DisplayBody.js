import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";
import MatchRides from "../../containers/main/MatchRides";
import React, { useState, useCallback, useEffect } from "react";
import UserSchedualAvailability from "./UserSchedualAvailability";

const DisplayBody = ({ displaySearch, user }) => {
    return (
        <>
            <div className="container">
                {displaySearch ? <MatchRides /> : <UserSchedualAvailability user={user} />}
            </div>
        </>
    );
};

export default DisplayBody;
