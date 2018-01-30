/**
 * Created by mac002 on 12/30/16.
 */

import React from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import LocalLabels from '../../labels/LocalLabels';
import { DownloadUserRecords } from 'ioc-liturgical-react';

class MyRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        about: LocalLabels.getMyRecordsLabels(props.app.session.languageCode)
      }
    }
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState(
        {
          labels: {
            about: LocalLabels.getMyRecordsLabels(nextProps.app.session.languageCode)
          }
        }
    )
  }

  render() {
    return <div className="App-page-download">
      <Well>
        <p>{this.state.labels.about.p1}</p>
        <DownloadUserRecords session={this.props.app.session}/>
      </Well>
    </div>
  }}

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
export default connect(mapStateToProps) (MyRecords);