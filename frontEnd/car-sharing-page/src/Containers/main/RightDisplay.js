import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";

import {
    ViewState,
    EditingState,
    IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    WeekView,
    DayView,
    EditRecurrenceMenu,
    AllDayPanel,
    ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./Display.css";

const RightDisplay = ({ data, currentDate, updateChange }) => {
    const onCommitChanges = ({ added, changed, deleted }) => {
        updateChange({ added, changed, deleted });
    };

    return (
        <>
             <Paper className="paper">
                <Scheduler data={data} height={460}>
                    <ViewState defaultCurrentDate={currentDate} />
                    <EditingState onCommitChanges={onCommitChanges} />
                    <IntegratedEditing />
                    <WeekView startDayHour={9} endDayHour={19} />
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip showOpenButton showDeleteButton />
                    <AppointmentForm />
                </Scheduler>
            </Paper>
        </>
    );
};

export default RightDisplay;

// Display default callender which will further be used to give avialaiblty to other users and will be saved in the DB
// onchage of search clicedc button will dispaly google map and the default distance from A to B.
