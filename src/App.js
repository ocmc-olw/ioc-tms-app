/**
 * Created by mac002 on 8/2/17.
 */
import React from 'react'
import { connect } from 'react-redux';
import Actions from './reducers/actionTypes';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import 'react-select/dist/react-select.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './App.css';

import server from './config/server';

import About from './modules/pages/About';
import Admin from './modules/pages/Admin';
import AddEntity from './modules/pages/AddEntity';
import EditWithAges from './modules/pages/EditWithAges';
import EditWithTopic from './modules/pages/EditWithTopic';
import GenerateWithAges from './modules/pages/GenerateWithAges';
import Help from './modules/pages/Help';
import Home from './modules/pages/Home';
import Links from './modules/pages/Links';
import Login from './modules/pages/Login';
import Logout from './modules/pages/Logout';
import Notes from './modules/pages/Notes';
import ParaTexts from './modules/pages/ParaTexts';
import SearchLinks from './modules/pages/SearchLinks';
import SearchOntology from './modules/pages/SearchOntology';
import SearchNotes from './modules/pages/SearchNotes';
import SearchTextParts from './modules/pages/SearchText';
import TextParts from './modules/pages/TextParts';

import Header from './modules/components/Header'
import Logo from './modules/components/images/Logo';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
      <Route
          {...rest}
          render={(props) => authed === true
              ? <Component {...props} />
              : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
  )
}

class App extends React.Component {

  componentWillMount = () => {
    server.getDbInfo()
        .then(response => {
          let {
            wsVersion
            , dbServerDomain
            , databaseReadOnly
            , databaseProtected
          } = response;
          this.props.dispatch(
              {
                type: Actions.DB_SET_INFO
                , domain: dbServerDomain
                , isProtected: databaseProtected
                , isReadOnly: databaseReadOnly
                , wsVersion: wsVersion
              }
          );
        })
        .catch((error) => {
          this.props.dispatch(
              {
                type: Actions.DB_SET_INFO
                , domain: undefined
                , isProtected: true
                , isReadOnly: false
                , wsVersion: undefined
              }
          );
        });
  }


  render = () => {
    return (
        <div className="App ">
          <Logo/>
          <Router>
            <div>
              <Header/>
              <div className="row App-content-row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/add'
                      component={AddEntity}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/editages'
                      component={EditWithAges}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/edittopic'
                      component={EditWithTopic}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/generateages'
                      component={GenerateWithAges}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/links'
                      component={Links}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/notes'
                      component={Notes}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/paratexts'
                      component={ParaTexts}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/notesSearch'
                      component={SearchNotes}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/textparts'
                      component={TextParts}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/searchlinks'
                      component={SearchLinks}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/searchontology'
                      component={SearchOntology}
                  />
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/searchtext'
                      component={SearchTextParts}
                  />
                  <Route path="/home" component={Home}/>
                  <PrivateRoute
                      authed={this.props.app.user.authenticated}
                      path='/admin'
                      component={Admin}
                  />
                  <Route path="/about" component={About}/>
                  <Route path="/help" component={Help}/>
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout}/>
                </div>
              </div>
            </div>
          </Router>
        </div>
    )
  }
}
//                <Route path="/login" render={props => <Login {...props} />} />

const mapStateToProps = (state) => {
  return {
    app:  state
  };
};

export default
    connect(
        mapStateToProps
    )(App);