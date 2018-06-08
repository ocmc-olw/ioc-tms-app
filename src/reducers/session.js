/**
 * Created by mac002 on 7/31/17.
 */
import Actions from './actionTypes';
import {Labels, User} from 'ioc-liturgical-react';
import LocalLabels from '../labels/LocalLabels';

export default function session(
    state = {
      restServer: ""
      , languageCode: "en"
      , labels: Labels.getAllLabels("en")
      , localLabels: LocalLabels.getAllLabels("en")
      , userInfo: new User()
      , uiSchemas: {
        formsDropdown: []
        , formsSchemas: {}
        , forms: {}
      }
      , dropdowns: {
        formsLoaded: false
        , biblicalBooksDropdown: []
        , biblicalChaptersDropdown: []
        , biblicalVersesDropdown: []
        , biblicalSubversesDropdown: []
        , formsDropdown: []
        , ontologyTypesDropdown: []
        , templatePartsDropdown: []
        , templateNewTemplateDropdown: []
        , templateWhenDayNameCasesDropdown: []
        , templateWhenDayOfMonthCasesDropdown: []
        , templateWhenDayOfSeasonCasesDropdown: []
        , templateWhenModeOfWeekCasesDropdown: []
        , templateWhenMonthNameCasesDropdown: []
        , schemaEditorFormsDropdown: []
      }
      , db: {
        infoNotRetrieved: true
        , domain: undefined
        , isProtected: true
        , isReadOnly: false
        , wsVersion: undefined
      }
    }
    , action) {

  // preserve immutability of current state by copying it
  let new_state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case Actions.SET_SESSION: {
      new_state.restServer = action.restServer;
      new_state.languageCode = action.languageCode;
      new_state.userInfo = action.userInfo;
      new_state.uiSchemas = action.uiSchemas;
      new_state.dropdowns = action.dropdowns;
      new_state.db = action.db;
      return new_state;
    }
    case Actions.SET_SESSION_DB_INFO: {
      new_state.db = action.db;
      return new_state;
    }
    case Actions.SET_SESSION_REST_SERVER: {
      new_state.restServer = action.restServer;
      return new_state;
    }
    case Actions.SET_SESSION_LANGUAGE_CODE: {
      new_state.languageCode = action.code;
      new_state.labels = Labels.getAllLabels(action.code);
      new_state.localLabels = LocalLabels.getAllLabels(action.code);
      return new_state;
    }
    case Actions.SET_SESSION_USER_LOGIN: {
      new_state.userInfo = action.userInfo;
      return new_state;
    }
    case Actions.SET_SESSION_USER_LOGOUT: {
      new_state.userInfo = new User();
      return new_state;
    }
    case Actions.SET_SESSION_UI_SCHEMAS: {
      new_state.uiSchemas = action.uiSchemas;
      return new_state;
    }
    case Actions.SET_SESSION_DROPDOWNS: {
      // Problem: when new_state clones the current state, it loses functions.
      // So, in order to preserve the functions in userInfo, we need to explicitly
      // make a new User, set the properties, and set new_state.userInfo to it.
      let userInfo = new User(
          new_state.userInfo.username
          , new_state.userInfo.password
          , new_state.userInfo.domain
          , new_state.userInfo.email
          , new_state.userInfo.firstname
          , new_state.userInfo.lastname
          , new_state.userInfo.title
          , new_state.userInfo.authenticated
          , action.domains
      );
      new_state.userInfo = userInfo;
      new_state.uiSchemas = action.uiSchema;
      new_state.dropdowns = action.dropdowns;
      return new_state;
    }
    default: {
      return state;
    }
  }
}