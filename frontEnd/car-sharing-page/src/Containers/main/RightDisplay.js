import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";
import "./Display.css";
import {
    Scheduler,
    DayView,
    Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const RightDisplay = () => {
    const currentDate = "2021-07-01";
    const schedulerData = [
        {
            title: "Website Re-Design Plan",
            startDate: new Date(2021, 7, 2, 9, 30), // year, data,month, time, time
            endDate: new Date(2021, 7, 2, 11, 30),
        },
        {
            title: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2021, 7, 1, 13, 0),
            endDate: new Date(2021, 7, 1, 15, 0),
        },
    ];

    return (
        <>
            {" Set the avaiability for next 7  days"}
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

export default RightDisplay;

// Display default callender which will further be used to give avialaiblty to other users and will be saved in the DB
// onchage of search clicedc button will dispaly google map and the default distance from A to B.
