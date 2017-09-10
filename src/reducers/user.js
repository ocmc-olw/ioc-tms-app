/**
 * Created by mac002 on 7/31/17.
 */
import Actions from './actionTypes';

export default function user(
    state = {
      authenticated: false
      , username: ""
      , password: ""
      , firstName: ""
      , lastName: ""
      , title: ""
      , domain: ""
      , email: ""
    }
    , action) {

  let new_state;
  
  switch (action.type) {
    case Actions.USER_LOGIN: {
      new_state = JSON.parse(JSON.stringify(state)); // preserve immutability of current state
      new_state = action.user;
      return new_state;
    }
    case Actions.USER_LOGOUT: {
      new_state = JSON.parse(JSON.stringify(state)); // preserve immutability of current state
      new_state = {
        authenticated: false
        , username: ""
        , password: ""
        , firstName: ""
        , lastName: ""
        , title: ""
        , domain: ""
        , email: ""
      };
      return new_state;
    }
    default: {
      return state;
    }
  }
}