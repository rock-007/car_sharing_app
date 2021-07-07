import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";
import React, { useState, useEffect } from "react";
import {
    getUserSchedules,
    setAvailableSlot,
} from "../../services/CarSharingServices";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
const UserSchedualAvailability = ({ displaySearch, user }) => {
    console.log(user);
    const [schedual, setSchedual] = useState(true);
    const [offerAvailability, setOfferAvailability] = useState(false);
    const [UserDisplay, setUserDisplay] = useState("availability");

    const handleChange = (event, newAlignment) => {
        console.log(event);
        setUserDisplay(newAlignment);
    };
    useEffect(() => {
        pullData();
    }, []);

    const [data, setData] = useState(null);
    // can pull both avaialbilty + bookings booked
    const pullData = () => {
        getUserSchedules(user).then((availabilityAndBookings) => {
            console.log(availabilityAndBookings);
            setData(dataCalenderMapping(availabilityAndBookings));
        });
    };

    // const schedulerData = [
    //     {
    //         title: "Website Re-Design Plan",
    //         startDate: new Date(2021, 6, 7, 9, 30), // year, data,month, time, time
    //         endDate: new Date(2021, 6, 7, 11, 30),
    //     },
    const submitAvailability = (availability) => {
        const availabilityObj = {
            ...availability,
            vehicle: {
                id: 2,
                type: "saloon",
                totalNoOfSeats: 5,
                regNo: "en67rx",
                user: user,
            },
        };
        setAvailableSlot(availabilityObj);
        console.log(availabilityObj);
    };

    const dataCalenderMapping = (availabilityAndBookings) => {
        console.log(availabilityAndBookings);
        let tempArray = [];

        let availabilityAndBookingsArray = availabilityAndBookings.map(
            (eachAvailabilityAndBooking, index) => {
                console.log(eachAvailabilityAndBooking[0] !== undefined);
                //eachAvailabilityAndBooking[0] is to make sure that array.map function doest run for empty array
                if (
                    eachAvailabilityAndBooking.length > 0 &&
                    eachAvailabilityAndBooking[0] !== undefined
                ) {
                    return eachAvailabilityAndBooking.map((eachItem, i) => {
                        if (index === 0) {
                            console.log(eachItem);

                            let payload = {
                                locations: [
                                    `"${eachItem.departingCity}, uk"`,
                                    `"${eachItem.destinationCity}, uk"`,
                                ],
                                options: {
                                    allToAll: true,
                                },
                            };
                            let distance = fetch(
                                `http://www.mapquestapi.com/directions/v2/routematrix?key=5FaBKNRHGmGuIfcL6oAYlAAyPYlIRVJ1`,
                                {
                                    method: "POST",
                                    body: JSON.stringify(payload),
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json",
                                        // "Access-Control-Allow-Origin": "*",
                                    },
                                }
                            )
                                .then((res) => res.json())
                                .then((data) => data);

                            tempArray.push(
                                CalenderMappingAvailability(
                                    eachItem,
                                    index,
                                    i,
                                    distance
                                )
                            );
                        }

                        //////////////////
                        else {
                            console.log(eachItem);

                            let payload = {
                                locations: [
                                    `"${eachItem.departingCity}, uk"`,
                                    `"${eachItem.destinationCity}, uk"`,
                                ],
                                options: {
                                    allToAll: true,
                                },
                            };
                            let distance = fetch(
                                `http://www.mapquestapi.com/directions/v2/routematrix?key=5FaBKNRHGmGuIfcL6oAYlAAyPYlIRVJ1`,
                                {
                                    method: "POST",
                                    body: JSON.stringify(payload),
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json",
                                        // "Access-Control-Allow-Origin": "*",
                                    },
                                }
                            )
                                .then((res) => res.json())
                                .then((data) => data);

                            tempArray.push(
                                CalenderMappingBooking(
                                    eachItem,
                                    index,
                                    i,
                                    distance
                                )
                            );
                        }
                    });
                }
            }
        );
        console.log(tempArray);
        return tempArray;
    };
    const CalenderMappingAvailability = (eachItem, index, i, distance) => {
        let date = eachItem.journeyStartDate;
        let time = eachItem.journeyStartTime;

        console.log(distance);
        console.log(time);
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        let hour = time.slice(0, 2);
        let min = time.slice(3, 5);
        console.log(`${hour - 1 + 2}`);
        console.log(new Date(2021, 6, 8, 11, 30));

        console.log(new Date(year, `${month - 1}`, day, hour, min));
        console.log(new Date(year, `${month - 1}`, day, `${hour + 1}`, min));

        // if (index === 0) {
        return {
            id: index + i,
            title: `from ${eachItem.departingCity} to ${eachItem.destinationCity} `,
            startDate: new Date(year, `${month - 1}`, day, hour, min),
            endDate: new Date(
                year,
                `${month - 1}`,
                day,
                `${hour - 1 + 2}`,
                min
            ),
            priorityId: 1,
        };
    };
    const CalenderMappingBooking = (eachItem, index, i, distance) => {
        console.log(eachItem["availability"]);

        let date = eachItem["availability"].journeyStartDate;

        console.log(date);
        let time = eachItem["availability"].journeyStartTime;
        console.log(time);
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        let hour = time.slice(0, 2);
        let min = time.slice(3, 5);
        console.log(`${hour - 1 + 2}`);
        console.log(new Date(2021, 6, 8, 11, 30));

        console.log(new Date(year, `${month - 1}`, day, hour, min));
        console.log(new Date(year, `${month - 1}`, day, `${hour + 1}`, min));
        // if (index === 0)
        return {
            id: index + i + 15,
            title: `from ${eachItem["availability"]["departingCity"]} to ${eachItem["availability"]["destinationCity"]} `,
            startDate: new Date(year, `${month - 1}`, day, hour, min),
            endDate: new Date(
                year,
                `${month - 1}`,
                day,
                `${hour - 1 + 2}`,
                min
            ),
            priorityId: 2,
        };
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

    // function schedualClicked() {
    //     setSchedual(true);
    //     setOfferAvailability(false);
    // }
    // function offerAvailabilityClicked() {
    //     setSchedual(false);
    //     setOfferAvailability(true);
    // }
    return (
        <>
            {/* <div
                style={{ borderRight: "1px solid grey" }}
                onClick={schedualClicked}
            >
                <em> Schedual </em>
            </div>
            <div onClick={offerAvailabilityClicked}>
                <em>offerAvailability </em>
            </div>
            <div> */}
            <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                    <ToggleButtonGroup
                        size="small"
                        value={UserDisplay}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="availability">
                            AVAILABILITY
                        </ToggleButton>
                        <ToggleButton value="calender">Calender</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>

            {UserDisplay === "availability" && (
                <LeftDisplay submitAvailability={submitAvailability} />
            )}
            {UserDisplay === "calender" && (
                <RightDisplay
                    data={data}
                    currentDate={currentDate}
                    updateChange={updateChange}
                />
            )}
            {/* </div> */}
        </>
    );
};

export default UserSchedualAvailability;
