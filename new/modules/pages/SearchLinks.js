import React from 'react';
import {SearchRelationships} from 'ioc-liturgical-react';
import server from '../../config/server';
import { connect } from 'react-redux';

class SearchLinks extends React.Component {
  render() {
    return <div className="App-page App-page-search-links">
      <SearchRelationships
          restServer={server.getWsServerPath()}
          username={this.props.app.user.username}
          password={this.props.app.user.password}
          searchLabels={this.props.app.language.labels.search}
          resultsTableLabels={this.props.app.language.labels.linkSearchResultsTable}
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