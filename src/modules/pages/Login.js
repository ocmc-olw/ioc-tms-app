/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import {Login as IocLogin, UiSchemas, User} from 'ioc-liturgical-react'
import server from '../../config/server';
import { connect } from 'react-redux';
import Actions from '../../reducers/actionTypes';
import PrivacyAndUse from './PrivacyAndUse';
import { Checkbox, Well } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);

    let labels = props.app.session.localLabels;
    let labelTopics = props.app.session.labelTopics;

    this.state = {
      labels: {
        thisClass: labels[labelTopics.loginPage]
      }
      , userInfo: new User()
      ,loginFormMsg: ""
      , agree: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getLogin = this.getLogin.bind(this);
    this.handleAgreementChange = this.handleAgreementChange.bind(this);
    this.handleDropdownsCallback = this.handleDropdownsCallback.bind(this);
    this.getTerms = this.getTerms.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {

    let labels = nextProps.app.session.localLabels;
    let labelTopics = nextProps.app.session.labelTopics;

    this.setState({
          labels: {
            thisClass: labels[labelTopics.loginPage]
          }
    }
    );
  };

  onSubmit = (status, valid, username, password, userdata) => {
    let theStatusMsg = this.props.app.session.labels.pageLogin.good;
    if (status === 200) {
      let userinfo = userdata[0];
      let userprefs = userdata[1];
      let userInfo = new User(
          username
          , password
          , userinfo.domain
          , userinfo.email
          , userinfo.firstname
          , userinfo.lastname
          , userinfo.title
          , valid
          , {}
          , userprefs
      );

      this.props.dispatch(
          {
            type: Actions.SET_SESSION_USER_LOGIN
            , userInfo: userInfo
          }
      );
      this.setState(
          {
            userInfo: userInfo
            , loginFormMsg: theStatusMsg
          }
      );
    } else {
      theStatusMsg = this.props.app.session.labels.pageLogin.bad;
      this.setState(
          {
            loginFormMsg: theStatusMsg
          }
      );
    }
  };

  handleDropdownsCallback = (response) => {

    let forms = response.data;
    let domains = forms.domains;
    let uiSchemas = new UiSchemas(
        forms.formsDropdown
        , forms.valueSchemas
        , forms.values
        , forms.adminForms
    );
    let dropdowns = {
      biblicalBooksDropdown: forms.biblicalBooksDropdown
      , biblicalChaptersDropdown: forms.biblicalChaptersDropdown
      , biblicalVersesDropdown: forms.biblicalVersesDropdown
      , biblicalSubversesDropdown: forms.biblicalSubversesDropdown
      , formsDropdown: forms.formsDropdown
      , ontologyTypesDropdown: forms.ontologyTypesDropdown
      , templateNewTemplateDropdown: forms.templateNewTemplateDropdown
      , templatePartsDropdown: forms.templatePartsDropdown
      , templateWhenDayNameCasesDropdown: forms.templateWhenDayNameCasesDropdown
      , templateWhenDayOfMonthCasesDropdown: forms.templateWhenDayOfMonthCasesDropdown
      , templateWhenDayOfSeasonCasesDropdown: forms.templateWhenDayOfSeasonCasesDropdown
      , templateWhenModeOfWeekCasesDropdown: forms.templateWhenModeOfWeekCasesDropdown
      , templateWhenMonthNameCasesDropdown: forms.templateWhenMonthNameCasesDropdown
      , liturgicalBooksDropdown: forms.liturgicalBooksDropdown
      , noteTypesDropdown: forms.noteTypesDropdown
      , noteTypesBilDropdown: forms.noteTypesBilDropdown
      , schemaEditorDropdown: forms.schemaEditorFormsDropdown
      , bibTexStylesDropdown: forms.bibTexStyles
      , uiDomainsDropdown: forms.uiDomains
      , uiLanguagesDropdown: forms.uiLanguages
      , uiSystemsDropdown: forms.uiSystems
  };
    this.props.dispatch(
        {
          type: Actions.SET_SESSION_DROPDOWNS
          , formsLoaded: true
          , forms: forms.data
          , domains: domains
          , uiSchema: uiSchemas
          , dropdowns: dropdowns
          , labelsAll: forms.uiLabels["ilr"]
          , localLabelsAll: forms.uiLabels["olw"]
          , labelTopics: forms.uiLabelTopics
        }
    )
  };

  handleAgreementChange = (evt) => {
      this.setState({ agree: evt.target.checked });
  };

  getTerms = () => {
    return (
        <div>
          <Well>
          <div>{this.state.labels.thisClass.msg1}</div>
            <p/>
          <Checkbox
              checked={this.state.agree}
              onChange={this.handleAgreementChange}
              inline={true}
          >
            {this.state.labels.thisClass.msg2}
          </Checkbox>
          <PrivacyAndUse/>
          </Well>
        </div>
      );
  };

  getLogin = () => {
    if (this.state.agree) {
      return (
          <div>
            <IocLogin
                restServer={server.getWsServerPath()}
                username={this.state.userInfo.username}
                password={this.state.userInfo.password}
                loginCallback={this.onSubmit}
                formPrompt={this.props.app.session.labels.pageLogin.prompt}
                formMsg={this.state.loginFormMsg}
                dropdownsCallback={this.handleDropdownsCallback}
                location={this.props.app.session.location}
            />
            {this.getTerms()}
          </div>
      );
    } else {
      return (
          <div>
          {this.getTerms()}
          </div>
      );
    }
  };
  render() {
    return (
        <div className="App-login">
          {this.getLogin()}
        </div>
    );
  }
}

/**
 * Maps the redux store state to this component's props.
 * @param state
 * @returns {{app: *}}
 */
function mapStateToProps(state) {
  return (
      {
        app: state
      }
  );
}
export default connect(mapStateToProps) (Login);