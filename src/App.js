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
import MyRecords from './modules/pages/MyRecords';
import Notes from './modules/pages/Notes';
import ParaTexts from './modules/pages/ParaTexts';
//import SearchLinks from './modules/pages/SearchLinks';
import SearchOntology from './modules/pages/SearchOntology';
import SearchNotes from './modules/pages/SearchNotes';
import SearchTextNotes from './modules/pages/SearchTextNotes';
import SearchTextParts from './modules/pages/SearchText';
import TextParts from './modules/pages/TextParts';
import Ocmc from './modules/components/images/Ocmc';

import Header from './modules/components/Header'

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
    this.props.dispatch({
          type: Actions.SET_SESSION_REST_SERVER
          , restServer: server.getWsServerPath()
    }
    );
    server.getDbInfo()
        .then(response => {
          let {
            wsVersion
            , dbServerDomain
            , databaseReadOnly
            , databaseProtected
          } = response;
          let db = {
              domain: dbServerDomain
              , isProtected: databaseProtected
              , isReadOnly: databaseReadOnly
              , wsVersion: wsVersion
          };
          this.props.dispatch(
              {
                type: Actions.SET_SESSION_DB_INFO
                , db: db
              }
          );
        })
        .catch((error) => {
          let db = {
            domain: undefined
            , isProtected: true
            , isReadOnly: false
            , wsVersion: undefined
          };
          this.props.dispatch(
              {
                type: Actions.SET_SESSION_DB_INFO
                , db: db
              }
          );
        });
  };


  render = () => {
    return (
        <div className="App ">
          <Router>
            <div>
              <Header/>
              <div className="row App-content-row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <Route exact path="/" component={Home} />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/add'
                      component={AddEntity}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/editages'
                      component={EditWithAges}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/edittopic'
                      component={EditWithTopic}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/generateages'
                      component={GenerateWithAges}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/links'
                      component={Links}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/notes'
                      component={Notes}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/paratexts'
                      component={ParaTexts}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/searchNotes'
                      component={SearchNotes}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/textparts'
                      component={TextParts}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/searchtextnotes'
                      component={SearchTextNotes}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/searchontology'
                      component={SearchOntology}
                  />
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/searchtext'
                      component={SearchTextParts}
                  />
                  <Route path="/home" component={Home}/>
                  <PrivateRoute
                      authed={this.props.app.session.userInfo.authenticated}
                      path='/admin'
                      component={Admin}
                  />
                  <Route path="/about" component={About}/>
                  <Route path="/help" component={Help}/>
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout}/>
                  <Route path="/download" component={MyRecords}/>
                </div>
              </div>
              <div className="App-footer">
                <span className="App-footer-provided-by">This website and the </span>
                <span className="App-footer-app-name">Online Liturgical Workstation &trade; </span>
                <span className="App-footer-provided-by">are provided by </span>
                <a href={"https://ocmc.org"} target={"_blank"}><Ocmc/></a>
                <span className="App-footer-provided-by-part-2">as a service to the Pan-Orthodox Community. </span>
              </div>
              <div className="App App-footer-short">
                <span className="App App-footer-provided-by">Website and software provided by </span>
                <a className="App-anchor-ocmc" href={"https://ocmc.org"} target={"_blank"}>OCMC</a>
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