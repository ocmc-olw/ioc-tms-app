import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import {SearchGeneric} from 'ioc-liturgical-react';

class EditWithSchemaEditor extends React.Component {

  componentWillMount = () => {
  };

render() {
    return (
        <div className="App-page App-edit App-edit-schema-editor">
            <SearchGeneric
                session={this.props.app.session}
                editor={true}
                fixedType={false}
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
export default connect(mapStateToProps) (EditWithSchemaEditor);