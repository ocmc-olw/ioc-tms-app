import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import {ParaColTextEditor} from 'ioc-liturgical-react';

class EditWithTopic extends React.Component {

  componentWillMount = () => {
  }

render() {
    return (
        <div className="App-page App-edit App-edit-topic">
          <ParaColTextEditor
            session={this.props.app.session}
            source={"gr_gr_cog"}
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
export default connect(mapStateToProps) (EditWithTopic);