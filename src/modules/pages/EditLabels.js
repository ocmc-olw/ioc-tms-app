import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import Actions from '../../reducers/actionTypes';

import {ParaColLabelEditor} from 'ioc-liturgical-react';

class EditLabels extends React.Component {
  constructor(props) {
    super(props);

    this.handleLabelChange = this.handleLabelChange.bind(this);
  }

  componentWillMount = () => {
  };

  handleLabelChange = (system, language, topic, key, value) => {

    this.props.dispatch(
        {
          type: Actions.SET_SESSION_LABELS
          , system: system
          , language: language
          , topic: topic
          , key: key
          , value: value
        }
    );
  };

render() {
    return (
        <div className="App-page App-edit App-edit-topic">
          <ParaColLabelEditor
            session={this.props.app.session}
            source={"en_sys_ilr"}
            callback={this.handleLabelChange}
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
export default connect(mapStateToProps) (EditLabels);