/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import {ChangePassword as ChangePasswordForm} from 'ioc-liturgical-react'
import { connect } from 'react-redux';

class ChangePassword extends React.Component {

  handleCallback = (x) => {
    console.log(x);
  };

  getForm = () => {
    if (this.props && this.props.app && this.props.app.session) {
      return (
            <ChangePasswordForm
                session={this.props.app.session}
                callback={this.handleCallback}
                formPrompt={"I am the form prompt"}
                formMsg={"I am the form message"}
            />
      );
    } else {
      return (<p>You must log in first.</p>);
    }
  };

  render() {
    return (
        <div className="App">
        {this.getForm()}
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
export default connect(mapStateToProps) (ChangePassword);