import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import auth from './modules/components/Auth'
import App from './modules/App';
import About from './modules/pages/About';
import Browser from './modules/pages/Browser';
import Notes from './modules/pages/Notes';
import Help from './modules/pages/Help';
import Home from './modules/pages/Home';
import Login from './modules/pages/Login'
import Logout from './modules/pages/Logout'
import ParaTexts from './modules/pages/ParaTexts';
import Links from './modules/pages/Links';
import Search from './modules/pages/SearchPage';
import SearchNotes from './modules/pages/SearchNotes';
import SearchLinks from './modules/pages/SearchLinks';
import TextParts from './modules/pages/TextParts';
import 'react-select/dist/react-select.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './App.css';
import { createStore } from 'redux'
import { reducers } from './reducers/index';
import { Provider } from 'react-redux';

/**
 * To add a new route:
 * 1. in /modules, create the component for the route
 * 2. add the new route to /modules/Header.js
 * 3. add the new route to here...
 *
 * Note: /public/index.html has a redirect to /search
 * when the page loads: window.location = "/#/search";
 */

const store = createStore(reducers, this.state);

function requireAuth(nextState, replace) {
  if (!auth.isAuthenticated()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home }/>
        <Route path="/textparts" component={TextParts } onEnter={requireAuth}/>
        <Route path="/paratexts" component={ParaTexts } onEnter={requireAuth}/>
        <Route path="/notes" component={Notes } onEnter={requireAuth}/>
        <Route path="/notesSearch" component={SearchNotes } onEnter={requireAuth}/>
        <Route path="/links" component={Links } onEnter={requireAuth}/>
        <Route path="/linksSearch" component={SearchLinks } onEnter={requireAuth}/>
        <Route path="/searchtextparts" component={Search} onEnter={requireAuth}/>
        <Route path="/browser" component={Browser } onEnter={requireAuth}/>
        <Route path="/about" component={About}/>
        <Route path="/help" component={Help}  onEnter={requireAuth}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
