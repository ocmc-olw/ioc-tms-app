import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import {SearchText as Search} from 'ioc-liturgical-react';

class SearchText extends React.Component {

  componentWillMount = () => {
  };

render() {
    return (
        <div className="App-page App-search">
          <Search
              session={this.props.app.session}
              initialDocType="Liturgical"
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
export default connect(mapStateToProps) (SearchText);