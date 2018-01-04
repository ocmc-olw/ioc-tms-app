import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import {AgesEditor} from 'ioc-liturgical-react';

class EditWithAges extends React.Component {

  componentWillMount = () => {
  }

render() {
    return (
        <div className="App-page App-edit App-edit-ages">
          <AgesEditor
              session={this.props.app.session}
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
export default connect(mapStateToProps) (EditWithAges);