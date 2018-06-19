import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import {
  Well
} from 'react-bootstrap';

import { LiturgicalDayProperties } from 'ioc-liturgical-react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.handleCallback = this.handleCallback.bind(this);
  }

  handleCallback = (data) => {

  };

render() {
    return (
        <div className="App-page App-calendar">
          <Well>
          <LiturgicalDayProperties
              session={this.props.app.session}
              callback={this.handleCallback}
          />
          </Well>
        </div>
    )
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
export default connect(mapStateToProps) (Calendar);