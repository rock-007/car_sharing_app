import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";
import MatchRides from "../../containers/main/MatchRides";
import React, { useState, useCallback, useEffect } from "react";

const DisplayBody = () => {
    // const currentDate = "2021-07-03";
    const schedulerData = [
        {
            title: "Website Re-Design Plan",
            startDate: new Date(2021, 6, 2, 9, 30), // year, data,month, time, time
            endDate: new Date(2021, 6, 2, 11, 30),
        },
        {
            title: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2021, 6, 1, 13, 0),
            endDate: new Date(2021, 6, 1, 15, 0),
        },
    ];
    const [data, setData] = useState(schedulerData);
    let currentDate = new Date().toISOString().slice(0, 10);
//     useEffect(() => {
//         // Update the document title using the browser API
         
// fetch()


//     },[data]);
    const updateChange = ({ added, changed, deleted }) => {
        if (added) {
            const startingAddedId =
                data.length > 0 ? data[data.length - 1].id + 1 : 0;
            setData([...data, { id: startingAddedId, ...added }]);
        }
        if (changed) {
            setData(
                data.map((appointment) =>
                    changed[appointment.id]
                        ? { ...appointment, ...changed[appointment.id] }
                        : appointment
                )
            );
        }
        if (deleted !== undefined) {
            setData(data.filter((appointment) => appointment.id !== deleted));
        }
    };

    return (
        <>
            <div className="container">
                <LeftDisplay />
                <RightDisplay
                    data={data}
                    currentDate={currentDate}
                    updateChange={updateChange}
                />
                <MatchRides />
            </div>
        </>
    );
};

export default DisplayBody;
