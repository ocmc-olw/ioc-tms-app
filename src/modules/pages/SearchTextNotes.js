import React from 'react'
import { connect } from 'react-redux';
import { SearchTextNotes as Search } from 'ioc-liturgical-react';

class SearchTextNotes extends React.Component {
  render() {
    return <div className="App-page App-page-editor">
      <Search
          session={this.props.app.session}
          editor={true}
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
export default connect(mapStateToProps) (SearchTextNotes);