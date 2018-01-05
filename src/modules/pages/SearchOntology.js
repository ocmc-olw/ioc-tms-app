import React from 'react';
import {SearchOntology as Search} from 'ioc-liturgical-react';
import { connect } from 'react-redux';

class SearchOntology extends React.Component {
  render() {
    return <div className="App-page App-page-search-ontology">
      <Search
          session={this.props.app.session}
          editor={true}
          initialType={"Human"}
          fixedType={false}
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
export default connect(mapStateToProps) (SearchOntology);