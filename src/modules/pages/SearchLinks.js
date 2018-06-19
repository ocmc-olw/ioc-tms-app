import React from 'react';
import {SearchRelationships} from 'ioc-liturgical-react';
import { connect } from 'react-redux';

class SearchLinks extends React.Component {
  render() {
    return <div className="App-page App-page-search-links">
      <SearchRelationships
          session={this.props.app.session}
      />
    </div>
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
export default connect(mapStateToProps) (SearchLinks);