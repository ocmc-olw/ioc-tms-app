/**
 * Created by mac002 on 7/31/17.
 */
import { combineReducers } from 'redux';
import session from './session';

export const reducers = combineReducers({
  session: session
});