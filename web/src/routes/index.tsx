import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NewCourse from '../pages/NewCourse';
import Courses from '../pages/Courses';
import Lessons from '../pages/Lessons';
import NewLesson from '../pages/NewLesson';
import Classes from '../pages/Classes';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/classes" component={Classes} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/courses/new" exact component={NewCourse} isPrivate />
      <Route path="/courses" exact component={Courses} isPrivate />
      <Route path="/lessons" exact component={Lessons} isPrivate />
      <Route path="/lessons/new" exact component={NewLesson} isPrivate />

    </Switch>
  );
};

export default Routes;
