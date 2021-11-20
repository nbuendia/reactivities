import React, { Fragment, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

//SEMANTIC UI
import { Container } from 'semantic-ui-react';

//COMPONENTS
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />;

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '7em'}} >
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);