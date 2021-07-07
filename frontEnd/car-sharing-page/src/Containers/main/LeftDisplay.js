// import { DayPilot, DayPilotCalendar } from "daypilot-pro-react";
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import "./Display.css";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Form, Button } from "react-bootstrap/";
import Container from "react-bootstrap/Container";

import {
    FormControl,
    InputLabel,
    FormHelperText,
    Input,
} from "@material-ui/core";

import {
    Scheduler,
    DayView,
    Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
const LeftDisplay = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const schedulerData = [
        {
            title: "Website Re-Design Plan",
            startDate: new Date(2021, 6, 7, 9, 30), // year, data,month, time, time
            endDate: new Date(2021, 6, 7, 11, 30),
        },
        {
            title: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2021, 6, 8, 13, 0),
            endDate: new Date(2021, 6, 8, 15, 0),
        },
    ];
    console.log(new Date(2021, 6, 2, 9, 30));

    const handleAvailability = (e) => {
        // need to gater all the info and then send to the BE t osave in the availabilty
        // remeber need to dummy the vehical info and user info
        // when using login then it will automatoocalyy save the user vehicals
        e.preventDefault();

        console.log(e.target.deptCity.value);
        console.log(e.target.date.value);
    };
    return (
        <>
            <Paper elevation={6}>
                <Box p={1}>
                    <Typography variant="h7">
                        <Container>
                            <Form onSubmit={handleAvailability}>
                                <Form.Group>
                                    <Form.Label>Departing City</Form.Label>
                                    <Form.Control
                                        id="deptCity"
                                        type="text"
                                        placeholder="Departing City"
                                    />
                                    <Form.Label>Destination City</Form.Label>
                                    <Form.Control
                                        id="destCity"
                                        type="text"
                                        placeholder="Destination City"
                                    />
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control id="date" type="date" />
                                    <Form.Label> Time</Form.Label>
                                    <Form.Control id="time" type="time" />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Container>
                    </Typography>
                </Box>
            </Paper>{" "}
        </>
    );
};

export default LeftDisplay;

// Display default users next 7 days planning
// onchage of search clicedc button will dispaly the avaialabe users matches the critaria
