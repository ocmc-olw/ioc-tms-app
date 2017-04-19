import React from 'react';
import {SearchRelationships} from 'ioc-liturgical-react';
import auth from '../components/Auth'
import server from '../../config/server';

export default React.createClass({
  render() {
    return <div className="App-page App-page-search-links">
      <SearchRelationships
          restServer={server.getWsServerPath()}
          username={auth.getUsername()}
          password={auth.getPassword()}
          searchLabels={this.props.labels.searchLinks}
          resultsTableLabels={this.props.labels.linkSearchResultsTable}
      />
    </div>
  }
})
