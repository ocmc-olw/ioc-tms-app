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
import LocalLabels from "../../labels/LocalLabels";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        thisClass: LocalLabels.getLoginLabels(props.app.session.languageCode)
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
    this.setState({
          labels: {
            thisClass: LocalLabels.getLoginLabels(nextProps.app.session.languageCode)
          }
    }
    );
  };

  onSubmit = (status, valid, username, password, userinfo) => {
    let theStatusMsg = this.props.app.session.labels.pageLogin.good;
    if (status === 200) {
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
  };
    this.props.dispatch(
        {
          type: Actions.SET_SESSION_DROPDOWNS
          , formsLoaded: true
          , forms: forms.data
          , domains: domains
          , uiSchema: uiSchemas
          , dropdowns: dropdowns
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