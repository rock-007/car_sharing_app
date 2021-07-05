import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";
import MatchRides from "../../containers/main/MatchRides";
import React, { useState, useCallback, useEffect } from "react";
import UserSchedualAvailability from "./UserSchedualAvailability";

const DisplayBody = ({ displaySearch, user, displaySearchResult1 }) => {
    return (
        <>
            <div className="container">
                {displaySearch ? (
                    <MatchRides displaySearchResult={displaySearchResult1} />
                ) : (
                    <UserSchedualAvailability user={user} />
                )}
            </div>
        </>
    );
};

export default DisplayBody;
