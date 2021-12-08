import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";

//SEMANTIC UI
import { Grid } from "semantic-ui-react";

//COMPONENTS
import LoadingComponent from "../../../../app/layout/LoadingComponent";
import ActivityList from "../dashboard/ActivityList";
import ActivityFilters from "./ActivityFilters";

function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities...' />;


    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);