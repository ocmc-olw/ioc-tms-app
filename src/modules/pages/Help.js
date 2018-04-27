/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import {HelpSearch} from 'ioc-liturgical-react'
import { connect } from 'react-redux';
import { Alert, Glyphicon, Jumbotron } from 'react-bootstrap';
import LocalLabels from "../../labels/LocalLabels";

export class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        thisClass: LocalLabels.getHelpLabels(props.app.session.languageCode)
      }
    }
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState(
        {
          labels: {
            thisClass: LocalLabels.getHelpLabels(nextProps.app.session.languageCode)
          }
        }
    )
  };

  render() {
    return (
      <div className="App-page App-help">
        <h3>{this.state.labels.thisClass.videos}</h3>
        <Jumbotron>
            <p>
              <a href={"http://www.youtube.com/watch?v=dwtervZaeQo"} target={"_blank"}>{this.state.labels.thisClass.videoLogon}</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=0_kw1VYY2i4"} target={"_blank"}>{this.state.labels.thisClass.videoMenuOverview}</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=o2IZx4JE4y4"} target={"_blank"}>{this.state.labels.thisClass.videoChangeLanguage}</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=WM6aPV6cNZg"} target={"_blank"}>{this.state.labels.thisClass.videoSelectService}</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=K6izGk5hJVs"} target={"_blank"}>{this.state.labels.thisClass.videoGenerateService}</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=6aqw7MJhMx8"} target={"_blank"}>{this.state.labels.thisClass.videoEnterTranslation}</a>
            </p>
            <p>
              <a href={"http://www.youtube.com/watch?v=xSm56wJBdWk"} target={"_blank"}>{this.state.labels.thisClass.videoCreateNote}</a>
            </p>
            <p>
              <a href={"https://www.youtube.com/watch?v=hsh06ECDgIg"} target={"_blank"}>{this.state.labels.thisClass.videoCreateTag}</a>
            </p>
          <p>
            <a href={"https://www.youtube.com/watch?v=d-KsviCPTzY"} target={"_blank"}>{this.state.labels.thisClass.videoTagSearch}</a>
          </p>
          <p>
            <a href={"http://www.youtube.com/watch?v=BaYW8gFOQjE"} target={"_blank"}>{this.state.labels.thisClass.videoNoteDownload}</a>
          </p>
          <p>
            <a href={"https://www.youtube.com/watch?v=RRrSvQzv5sA"} target={"_blank"}>{this.state.labels.thisClass.videoGrammar}</a>
          </p>
          <p>
            <a href={"http://www.youtube.com/watch?v=_sTYUtxiZGM"} target={"_blank"}>{this.state.labels.thisClass.videoDailyReadings}</a>
            <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />
              {this.state.labels.thisClass.videoDailyReadingsBlurb}
            </Alert>
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
