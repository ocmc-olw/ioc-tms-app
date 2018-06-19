/**
 * Created by mac002 on 12/30/16.
 */

import React from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { DownloadUserRecords } from 'ioc-liturgical-react';

class MyRecords extends React.Component {
  constructor(props) {
    super(props);
    let labels = props.app.session.localLabels;
    let labelTopics = props.app.session.labelTopics;
    this.state = {
      labels: {
        about: labels[labelTopics.myRecords]
      }
    }
  }
  componentWillReceiveProps = (nextProps) => {
    let labels = nextProps.app.session.localLabels;
    let labelTopics = nextProps.app.session.labelTopics;
    this.setState(
        {
          labels: {
            about: labels[labelTopics.myRecords]
          }
        }
    )
  };

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