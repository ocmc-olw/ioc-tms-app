import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import server from '../../config/server';
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
              restServer={server.getWsServerPath()}
              username={this.props.app.user.username}
              password={this.props.app.user.password}
              languageCode={this.props.app.language.code}
              domains={this.props.app.dropdowns.domains}
              ontologyDropdowns={this.props.app.dropdowns.ontologyDropdowns}
              formsDropdown={this.props.app.dropdowns.formsDropdown}
              formsSchemas={this.props.app.dropdowns.formsValueSchemas}
              forms={this.props.app.dropdowns.formsValues}
              biblicalBooksDropdown={this.props.app.dropdowns.biblicalBooksDropdown}
              biblicalChaptersDropdown={this.props.app.dropdowns.biblicalChaptersDropdown}
              biblicalVersesDropdown={this.props.app.dropdowns.biblicalVersesDropdown}
              biblicalSubversesDropdown={this.props.app.dropdowns.biblicalSubversesDropdown}
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