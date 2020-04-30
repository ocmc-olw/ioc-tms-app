import React from 'react';
import { connect } from 'react-redux';
import {Lookup as Looker} from 'ioc-liturgical-react';

export class Lookup extends React.Component {

  render() {
    return (
    <div className="App-page">
      <Looker
          session={this.props.app.session}
          idDomain={this.props.match.params.domain}
          idTopic={this.props.match.params.topic}
          idKey={this.props.match.params.key}
      />
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
export default connect(mapStateToProps) (Lookup);
