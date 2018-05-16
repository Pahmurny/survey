import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './AppRouter.scss';

import Login from '../Login/Login';
import BodyMenu from '../BodyMenu/BodyMenu';
import MySurveys from '../MySurveys/MySurveys';
import NewSurvey from '../NewSurvey/NewSurvey';
import SurveyTemplates from '../SurveyTemplates/SurveyTemplates';
import Users from '../Users/Users';


const newSurvey = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <NewSurvey className="AppRouter_content" />
  </div>
);

const mySurveys = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <MySurveys className="AppRouter_content" />
  </div>
);

const surveyTemplates = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <SurveyTemplates className="AppRouter_content" />
  </div>
);

const users = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <Users className="AppRouter_content" />
  </div>
);

const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/my-surveys" />)} />
    <Route path="/new-survey" render={newSurvey} />
    <Route path="/my-surveys" render={mySurveys} />
    <Route path="/templates" render={surveyTemplates} />
    <Route path="/users" render={users} />
    <Route path="/login" component={Login} />
    <Route path="*" exact render={() => (<Redirect to="/my-surveys" />)} />
  </Switch>
);

export default AppRouter;
