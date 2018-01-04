import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import {NewEntry} from 'ioc-liturgical-react';

class AddEntity extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewEntryCallback = this.handleNewEntryCallback.bind(this);
  }

  componentWillMount = () => {
  }

  handleNewEntryCallback = () => {

  }

render() {
    return (
        <div className="App-page App-edit App-edit-ages">
          <NewEntry
              session={this.props.app.session}
              changeHandler={this.handleNewEntryCallback}
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
export default connect(mapStateToProps) (AddEntity);