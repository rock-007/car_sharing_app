import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";
import MatchRides from "../../containers/main/MatchRides";
import React, { useState, useCallback, useEffect } from "react";
import UserSchedualAvailability from "./UserSchedualAvailability";

const DisplayBody = ({ displaySearch, user, displaySearchResult1,bookSlotRequest }) => {

    return (
        <>
            <div  className="container" style={{padding: "0", margin:"3rem", maxWidth:"110rem"}} >
                {displaySearch ? (
                    <MatchRides
                        displaySearchResult={displaySearchResult1}
                        bookSlotRequest={bookSlotRequest}
                    />
                ) : (
                    <UserSchedualAvailability user={user} />
                )}
            </div>
        </>
    );
};

export default DisplayBody;
