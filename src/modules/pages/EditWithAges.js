import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import server from '../../config/server';
import {AgesEditor} from 'ioc-liturgical-react';

class EditWithAges extends React.Component {

  componentWillMount = () => {
  }

render() {
    return (
        <div className="App-page App-edit App-edit-ages">
          <AgesEditor
              restServer={server.getWsServerPath()}
              username={this.props.app.user.username}
              password={this.props.app.user.password}
              languageCode={this.props.app.language.code}
              domains={this.props.app.dropdowns.domains}
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