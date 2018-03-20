/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import {HelpSearch} from 'ioc-liturgical-react'
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';

export class Help extends React.Component {
  render() {
    return (
      <div className="App-page App-help">
        <h3>Videos</h3>
        <Jumbotron>
            <p>
              <a href={"http://www.youtube.com/watch?v=dwtervZaeQo"} target={"_blank"}>Logon / Logoff</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=0_kw1VYY2i4"} target={"_blank"}>Overview of Menu Items</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=o2IZx4JE4y4"} target={"_blank"}>Changing the Language of the User Interface</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=WM6aPV6cNZg"} target={"_blank"}>Selecting a Service or Liturgical Book from AGES DCS</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=K6izGk5hJVs"} target={"_blank"}>Generating a Service or Liturgical Book</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=6aqw7MJhMx8"} target={"_blank"}>Entering a Translation</a>
            </p>
            <p>
              <a href={"https://www.youtube.com/watch?v=hsh06ECDgIg"} target={"_blank"}>Creating / Editing Tags for a Note</a>
            </p>
          <p>
            <a href={"https://www.youtube.com/watch?v=d-KsviCPTzY"} target={"_blank"}>Using Tags to Search for Notes</a>
          </p>
        </Jumbotron>
        <HelpSearch labels={this.props.app.session.labels.help.search}/>
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
export default connect(mapStateToProps) (Help);
