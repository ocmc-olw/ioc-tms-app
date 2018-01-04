import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import {AgesViewer} from 'ioc-liturgical-react';

class GenerateWithAges extends React.Component {

  componentWillMount = () => {
  }

render() {
    return (
        <div className="App-page App-edit App-edit-ages">
          <AgesViewer
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
export default connect(mapStateToProps) (GenerateWithAges);