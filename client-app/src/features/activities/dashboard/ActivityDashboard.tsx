import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";

//SEMANTIC UI
import { Grid } from "semantic-ui-react";

//COMPONENTS
import ActivityList from "./ActivityList";
import ActivityDetails from "./details/ActivityDetails";
import ActivityForm from "./form/ActivityForm";

function ActivityDashboard() {
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;

    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails />}
                {editMode && 
                <ActivityForm />}
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);