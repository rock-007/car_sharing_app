import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import { blue, orange } from "@material-ui/core/colors";

import {
    ViewState,
    EditingState,
    IntegratedEditing,
    GroupingState,
    IntegratedGrouping,
} from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    WeekView,
    GroupingPanel,
    Resources,
    Toolbar,
    ViewSwitcher,
    DragDropProvider,
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
    const resources = [
        {
            fieldName: "priorityId",
            title: "Priority",
            instances: [
                { text: "Availabilty/Offers 🟦", id: 1, color: blue },
                { text: "Bookings 🟧", id: 2, color: orange },
            ],
        },
    ];
    const groupOrientation = (viewName) => viewName.split(" ")[0];
    const grouping = [
        {
            resourceName: "priorityId",
        },
    ];
    return (
        <>
            <Paper className="paper">
                <Scheduler data={data} height={660}>
                    <ViewState defaultCurrentDate={currentDate} />
                    <EditingState onCommitChanges={onCommitChanges} />
                    <GroupingState
                        grouping={grouping}
                        groupOrientation={groupOrientation}
                    />
                    {/* <IntegratedEditing /> */}
                    <WeekView
                        startDayHour={9}
                        endDayHour={19}
                        name="Horizontal Orientation"
                    />
                    {/* <ConfirmationDialog /> */}
                    <Appointments />
                    <Resources data={resources} mainResourceName="priorityId" />
                    <IntegratedGrouping />
                    <IntegratedEditing />
                    <AppointmentTooltip />
                    {/* <AppointmentTooltip showOpenButton showDeleteButton /> */}
                    <AppointmentForm />
                    <GroupingPanel />
                    <Toolbar />
                    {/* <ViewSwitcher /> */}
                    {/* <DragDropProvider /> */}
                </Scheduler>
            </Paper>
        </>
    );
};

export default RightDisplay;

// Display default callender which will further be used to give avialaiblty to other users and will be saved in the DB
// onchage of search clicedc button will dispaly google map and the default distance from A to B.
