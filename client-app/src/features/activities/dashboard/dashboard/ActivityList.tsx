import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";

//SEMANTIC UI
import { Header } from "semantic-ui-react";

//COMPONENTS
import ActivityListItem from './ActivityListItem';

function ActivityList() {
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;
  
    return(
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}
                </Fragment>
            ))}
        </>
    )
}

export default observer(ActivityList);