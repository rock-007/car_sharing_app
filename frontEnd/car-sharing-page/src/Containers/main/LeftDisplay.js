// import { DayPilot, DayPilotCalendar } from "daypilot-pro-react";
// import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import "./Display.css";
import {
    Scheduler,
    DayView,
    Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
const LeftDisplay = () => {
    const currentDate = "2021-07-03";
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
    console.log(new Date(2021, 6, 2, 9, 30));
    return (
        <>
            {" User Schedual for next 7  days"}

            <Paper className="paper">
                <Scheduler data={schedulerData} height={460}>
                    <ViewState defaultCurrentDate={currentDate} />
                    <WeekView startDayHour={9} endDayHour={21} />
                    <Appointments />
                </Scheduler>
            </Paper>
        </>
    );
};

export default LeftDisplay;

// Display default users next 7 days planning
// onchage of search clicedc button will dispaly the avaialabe users matches the critaria
