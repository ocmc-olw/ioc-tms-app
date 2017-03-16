import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import auth from './modules/components/Auth'
import App from './modules/App';
import About from './modules/pages/About';
import Browser from './modules/pages/Browser';
import Comments from './modules/pages/Comments';
import Help from './modules/pages/Help';
import Home from './modules/pages/Home';
import Login from './modules/pages/Login'
import Logout from './modules/pages/Logout'
import ParaTexts from './modules/pages/ParaTexts';
import References from './modules/pages/References';
import Search from './modules/pages/SearchPage';
import SearchComments from './modules/pages/SearchComments';
import SearchReferences from './modules/pages/SearchReferences';
import Texts from './modules/pages/Texts';
import 'react-select/dist/react-select.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './App.css';

/**
 * To add a new route:
 * 1. in /modules, create the component for the route
 * 2. add the new route to /modules/Header.js
 * 3. add the new route to here...
 *
 * Note: /public/index.html has a redirect to /search
 * when the page loads: window.location = "/#/search";
 */


function requireAuth(nextState, replace) {
  if (!auth.isAuthenticated()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home }/>
      <Route path="/texts" component={Texts } onEnter={requireAuth}/>
      <Route path="/paratexts" component={ParaTexts } onEnter={requireAuth}/>
      <Route path="/comments" component={Comments } onEnter={requireAuth}/>
      <Route path="/commentsSearch" component={SearchComments } onEnter={requireAuth}/>
      <Route path="/references" component={References } onEnter={requireAuth}/>
      <Route path="/referencesSearch" component={SearchReferences } onEnter={requireAuth}/>
      <Route path="/search" component={Search } onEnter={requireAuth}/>
      <Route path="/browser" component={Browser } onEnter={requireAuth}/>
      <Route path="/about" component={About}/>
      <Route path="/help" component={Help}  onEnter={requireAuth}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout} />
    </Route>
  </Router>
), document.getElementById('root'))
