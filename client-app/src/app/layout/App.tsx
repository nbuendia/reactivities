import React, { Fragment } from 'react';
import { Route, useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';

//SEMANTIC UI
import { Container } from 'semantic-ui-react';

//COMPONENTS
import NavBar from './NavBar';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/dashboard/form/ActivityForm';
import ActivityDetails from '../../features/activities/dashboard/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route
      path={'/(.+)'} 
      render={() => (
        <Fragment>
          <NavBar />
          <Container style={{marginTop: '7em'}} >
            <Route exact path='/activities' component={ActivityDashboard} />
            <Route path='/activities/:id' component={ActivityDetails} />
            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
          </Container>
        </Fragment>
      )}
      />
    </Fragment>
  );
}

export default observer(App);
