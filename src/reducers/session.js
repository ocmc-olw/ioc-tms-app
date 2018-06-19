/**
 * Created by mac002 on 7/31/17.
 */
import Actions from './actionTypes';
import {StaticLabels, User} from 'ioc-liturgical-react';
import LocalLabels from '../labels/LocalLabels';
import LabelTopics from '../labels/LabelTopics';

// staticLabels is used to jumpstart the labels.
// After a user logs in, we replace these labels
// with ones sent to us by the server.
const staticLabels = new StaticLabels();
let labelTopics = {};
for (var p in LabelTopics) {
  if (LabelTopics.hasOwnProperty(p)) {
    labelTopics[p] = p;
  }
}

export default function session(
    state = {
      restServer: ""
      , languageCode: "en"
      , labelTopics: labelTopics
      , labelsAll: staticLabels.labelsJson
      , labels: staticLabels.labelsJson["en"]
      , localLabels: LocalLabels.getAllLabels("en")
      , localLabelsAll: LocalLabels.localLabels
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
        , uiDomains: []
        , uiLanguages: []
        , uiSystems: []
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
      new_state.labelTopics = StaticLabels.LabelTopics;
      return new_state;
    }
    case Actions.SET_SESSION_DB_INFO: {
      new_state.db = action.db;
      return new_state;
    }
    case Actions.SET_SESSION_LABELS: {
      try {
        if (action.system === "ilr") {
          new_state.labelsAll[new_state.languageCode][action.topic][action.key] = action.value;
          if (action.language.endsWith(new_state.languageCode)) {
            new_state.labels[action.topic][action.key] = action.value;
          }
        } else {
          new_state.localLabelsAll[new_state.languageCode][action.topic][action.key] = action.value;
          if (action.language.endsWith(new_state.languageCode)) {
            new_state.localLabels[action.topic][action.key] = action.value;
          }
        }
      } catch (err) {
        console.log(err);
      }
      try {
        if (! new_state.labelTopics[action.topic]){
          new_state.labelTopics[action.topic] = action.topic;
        }
      } catch (err) {
        console.log(err);
      }

      return new_state;
    }
    case Actions.SET_SESSION_REST_SERVER: {
      new_state.restServer = action.restServer;
      return new_state;
    }
    case Actions.SET_SESSION_LANGUAGE_CODE: {
      new_state.languageCode = action.code;
      new_state.labels = new_state.labelsAll[action.code];
      new_state.localLabels = new_state.localLabelsAll[action.code];
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
          , new_state.userInfo.prefs
      );
      new_state.userInfo = userInfo;
      new_state.uiSchemas = action.uiSchema;
      new_state.dropdowns = action.dropdowns;
      new_state.labelsAll = action.labelsAll;
      new_state.localLabelsAll = action.localLabelsAll;
      new_state.labels = action.labelsAll[new_state.languageCode];
      new_state.localLabels = action.localLabelsAll[new_state.languageCode];
      new_state.labelTopics = action.labelTopics;
      return new_state;
    }
    default: {
      return state;
    }
  }
}