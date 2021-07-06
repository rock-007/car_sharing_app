import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";
import React, { useState, useEffect } from "react";
import { getUserSchedules } from "../../services/CarSharingServices";
import moment from "moment";
import red from "@material-ui/core/colors/red";
import { blue, orange } from "@material-ui/core/colors";

const UserSchedualAvailability = ({ displaySearch, user }) => {
    console.log(user);
    const [schedual, setSchedual] = useState(true);
    const [offerAvailability, setOfferAvailability] = useState(false);

    useEffect(() => {
        pullData();
    }, []);

    const [data, setData] = useState(null);
    // can pull both avaialbilty + bookings booked
    const pullData = () => {
        getUserSchedules(user).then((availabilityAndBookings) => {
            console.log(availabilityAndBookings);
            dataCalenderMapping(availabilityAndBookings);
        });
    };

    // const schedulerData = [
    //     {
    //         title: "Website Re-Design Plan",
    //         startDate: new Date(2021, 6, 7, 9, 30), // year, data,month, time, time
    //         endDate: new Date(2021, 6, 7, 11, 30),
    //     },

    const dataCalenderMapping = (availabilityAndBookings) => {
 
        let availabilityAndBookingsArray= availabilityAndBookings[0].map((eachAvailability, index) => {
            // var dateTime = moment(
            //     `${eachAvailability.journeyStartDate} ${eachAvailability.journeyStartTime}`,
            //     "YYYY-MM-DD HH:mm"
            // ).format('LLLL');
            if (index === 0) {
                let date = eachAvailability.journeyStartDate;
                let time = eachAvailability.journeyStartTime;
                let year = date.slice(0, 4);
                let month = date.slice(5, 7);
                let day = date.slice(8, 10);
                let hour = time.slice(0, 2);
                let min = time.slice(3, 5);
                console.log(`${hour - 1 + 2}`);
                console.log(new Date(2021, 6, 8, 11, 30));

                console.log(new Date(year, `${month - 1}`, day, hour, min));
                console.log(
                    new Date(year, `${month - 1}`, day, `${hour + 1}`, min)
                );
                return {
                    id: index,
                    title: `from ${eachAvailability.departingCity} to ${eachAvailability.destinationCity} `,
                    startDate: new Date(year, `${month - 1}`, day, hour, min),
                    // endDate: new Date(2021, 6, 8, 11, 35),
                    // startDate: new Date(year, month, day, hour, min),
                    endDate: new Date(
                        year,
                        `${month - 1}`,
                        day,
                        `${hour - 1 + 2}`,
                        min
                    ),
                    priorityId: 1,
                };
            }
            if (index === 1) {
                let date = eachAvailability.journeyStartDate;
                let time = eachAvailability.journeyStartTime;
                let year = date.slice(0, 4);
                let month = date.slice(5, 7);
                let day = date.slice(8, 10);
                let hour = time.slice(0, 2);
                let min = time.slice(3, 5);
                console.log(`${hour - 1 + 2}`);
                console.log(new Date(2021, 6, 8, 11, 30));

                console.log(new Date(year, `${month - 1}`, day, hour, min));
                console.log(
                    new Date(year, `${month - 1}`, day, `${hour + 1}`, min)
                );
                return {
                    id: index,
                    title: `from ${eachAvailability.departingCity} to ${eachAvailability.destinationCity} `,
                    startDate: new Date(year, `${month - 1}`, day, hour, min),
                    // endDate: new Date(2021, 6, 8, 11, 35),
                    // startDate: new Date(year, month, day, hour, min),
                    endDate: new Date(
                        year,
                        `${month - 1}`,
                        day,
                        `${hour - 1 + 2}`,
                        min
                    ),
                    priorityId: 2,
                };
            }
        });

        setData(availabilityAndBookingsArray);

        // console.log("2223");
        // console.log(data1);
        // setData(
        //     data1.map((eachAvailability, index) => {
        //         // var dateTime = moment(
        //         //     `${eachAvailability.journeyStartDate} ${eachAvailability.journeyStartTime}`,
        //         //     "YYYY-MM-DD HH:mm"
        //         // ).format('LLLL');
        //         let date = eachAvailability.journeyStartDate;
        //         let time = eachAvailability.journeyStartTime;
        //         let year = date.slice(0, 4);
        //         let month = date.slice(5, 7);
        //         let day = date.slice(8, 10);
        //         let hour = time.slice(0, 2);
        //         let min = time.slice(3, 5);
        //         console.log(`${hour - 1 + 2}`);
        //         console.log(new Date(2021, 6, 8, 11, 30));

        //         console.log(new Date(year, `${month - 1}`, day, hour, min));
        //         console.log(
        //             new Date(year, `${month - 1}`, day, `${hour + 1}`, min)
        //         );
        //         return {
        //             id: index,
        //             title: `from ${eachAvailability.departingCity} to ${eachAvailability.destinationCity} `,
        //             startDate: new Date(year, `${month - 1}`, day, hour, min),
        //             // endDate: new Date(2021, 6, 8, 11, 35),
        //             // startDate: new Date(year, month, day, hour, min),
        //             endDate: new Date(
        //                 year,
        //                 `${month - 1}`,
        //                 day,
        //                 `${hour - 1 + 2}`,
        //                 min
        //             ),
        //             priorityId: 1,
        //         };
        //     })
        // );
    };

    let currentDate = new Date().toISOString().slice(0, 10);

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

    function schedualClicked() {
        setSchedual(true);
        setOfferAvailability(false);
    }
    function offerAvailabilityClicked() {
        setSchedual(false);
        setOfferAvailability(true);
    }
    return (
        <>
            <div
                style={{ borderRight: "1px solid grey" }}
                onClick={schedualClicked}
            >
                <i>
                    {" "}
                    <em> Schedual </em>
                </i>
            </div>
            <div onClick={offerAvailabilityClicked}>
                <em>offerAvailability </em>
            </div>
            <div>
                {schedual && <LeftDisplay />}
                {offerAvailability && (
                    <RightDisplay
                        data={data}
                        currentDate={currentDate}
                        updateChange={updateChange}
                    />
                )}
            </div>
        </>
    );
};

export default UserSchedualAvailability;
// const currentDate = "2021-07-03";
// const schedulerData = [
//     {
//         title: "Website Re-Design Plan",
//         startDate: new Date(2021, 6, 8, 9, 30), // year, data,month, time, time
//         endDate: new Date(2021, 6, 8, 11, 30),
//     },
//     {
//         title: "Book Flights to San Fran for Sales Trip",
//         startDate: new Date(2021, 6, 9, 13, 0),
//         endDate: new Date(2021, 6, 9, 15, 0),
//     },
// ];
