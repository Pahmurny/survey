import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './AppRouter.scss';

import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import BodyMenu from '../BodyMenu/BodyMenu';
import MySurveys from '../MySurveys/MySurveys';
import NewSurvey from '../NewSurvey/NewSurvey';
import SurveyEdit from '../SurveyEdit/SurveyEdit';
import SurveyTemplates from '../SurveyTemplates/SurveyTemplates';
import Users from '../Users/Users';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isChecked: state.user.isChecked,
  };
};


const RouteNewSurvey = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <NewSurvey className="AppRouter_content" />
  </div>
);

const RouteMySurveys = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <MySurveys className="AppRouter_content" />
  </div>
);

const RouteSurveyTemplates = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <SurveyTemplates className="AppRouter_content" />
  </div>
);

const RouteUsers = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <Users className="AppRouter_content" />
  </div>
);

const RouteSurveyEdit = () => (
  <div className="AppRouter">
    <BodyMenu className="AppRouter_menu" />
    <SurveyEdit className="AppRouter_content" />
  </div>
);

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/my-surveys" />)} />
    <Route path="/new-survey" render={RouteNewSurvey} />
    <Route path="/my-surveys" render={RouteMySurveys} />
    <Route path="/templates" render={RouteSurveyTemplates} />
    <Route path="/edit/:surveyId" render={RouteSurveyEdit} />
    <Route path="/users" render={RouteUsers} />
    <Route path="/login" component={Login} />
    <Route path="*" render={() => (<Redirect to="/my-surveys" />)} />
  </Switch>
);

const GuestRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="*" render={() => (<Redirect to="/" />)} />
  </Switch>
);

const AppRouter = ({ isLoggedIn, isChecked }) => (
  <div>
    {isChecked ? (isLoggedIn ? <LoggedInRoutes /> : <GuestRoutes />) : (<div>Please wait</div>)}
  </div>
);

export default withRouter(connect(mapStateToProps)(AppRouter));
