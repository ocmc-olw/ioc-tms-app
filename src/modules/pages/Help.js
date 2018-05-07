/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import {HelpPanel, HelpSearch} from 'ioc-liturgical-react';
import { connect } from 'react-redux';
import {
  Accordion
  , Alert
  , Glyphicon
  , Well
} from 'react-bootstrap';
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
        <h1>{this.state.labels.thisClass.title}</h1>
        <Well>
        <p>{this.state.labels.thisClass.intro}
        </p>
        <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {this.state.labels.thisClass.videoWarning}</Alert>
        </Well>
        <h2>{this.state.labels.thisClass.videos}</h2>
        <Accordion>
            <HelpPanel
                eventKey={"videoMenuOverview"}
                title={this.state.labels.thisClass.videoMenuOverview}
                url={"https://liml.org/static/video/olw-menu.mp4"}
                text={this.state.labels.thisClass.videoMenuOverviewText}
            />
            <HelpPanel
              eventKey={"videoLogon"}
              title={this.state.labels.thisClass.videoLogon}
              url={"https://liml.org/static/video/olw-login.mp4"}
              text={this.state.labels.thisClass.videoLogonText}
            />
            <HelpPanel
                eventKey={"videoChangeLanguage"}
                title={this.state.labels.thisClass.videoChangeLanguage}
                url={"https://liml.org/static/video/olw-multi-language.mp4"}
                text={this.state.labels.thisClass.videoChangeLanguageText}
            />
            <HelpPanel
                eventKey={"videoSelectService"}
                title={this.state.labels.thisClass.videoSelectService}
                url={"https://liml.org/static/video/olw-ages-selector.mp4"}
                text={this.state.labels.thisClass.videoSelectServiceText}
            />
            <HelpPanel
                eventKey={"videoGenerateService"}
                title={this.state.labels.thisClass.videoGenerateService}
                url={"https://liml.org/static/video/olw-generator.mp4"}
                text={this.state.labels.thisClass.videoGenerateServiceText}
            />
            <HelpPanel
                eventKey={"videoEnterTranslation"}
                title={this.state.labels.thisClass.videoEnterTranslation}
                url={"https://liml.org/static/video/olw-editor-enter-translation.mp4"}
                text={this.state.labels.thisClass.videoEnterTranslationText}
            />
            <HelpPanel
                eventKey={"videoCreateNote"}
                title={this.state.labels.thisClass.videoCreateNote}
                url={"https://liml.org/static/video/olw-ages-text-notes.mp4"}
                text={this.state.labels.thisClass.videoCreateNoteText}
            />
            <HelpPanel
                eventKey={"videoSearchTexts"}
                title={this.state.labels.thisClass.videoSearchTexts}
                url={"https://liml.org/static/video/olw-searching-text.mp4"}
                text={this.state.labels.thisClass.videoSearchTextText}
            />
          <HelpPanel
              eventKey={"videoSearchNotes"}
              title={this.state.labels.thisClass.videoSearchNotes}
              url={"https://liml.org/static/video/olw-searching-text-notes.mp4"}
              text={this.state.labels.thisClass.videoSearchNotesText}
          />
          <HelpPanel
              eventKey={"videoCreateTag"}
              title={this.state.labels.thisClass.videoCreateTag}
              url={"https://liml.org/static/video/olw-text-notes-tags-creating.mp4"}
              text={this.state.labels.thisClass.videoCreateTagText}
          />
          <HelpPanel
              eventKey={"videoTagSearch"}
              title={this.state.labels.thisClass.videoTagSearch}
              url={"https://liml.org/static/video/olw-text-notes-tags-searching.mp4"}
              text={this.state.labels.thisClass.videoTagSearchText}
          />
          <HelpPanel
              eventKey={"videoNoteDownload"}
              title={this.state.labels.thisClass.videoNoteDownload}
              url={"https://liml.org/static/video/olw-my-records.mp4"}
              text={this.state.labels.thisClass.videoNoteDownloadText}
          />
          <HelpPanel
              eventKey={"videoGrammar"}
              title={this.state.labels.thisClass.videoGrammar}
              url={"https://liml.org/static/video/olw-grammar.mp4"}
              text={this.state.labels.thisClass.videoGrammarText}
          />
          <HelpPanel
              eventKey={"videoDailyReadings"}
              title={this.state.labels.thisClass.videoDailyReadings}
              url={"https://liml.org/static/video/olw-daily-readings.mp4"}
              text={this.state.labels.thisClass.videoDailyReadingsText}
          />
        </Accordion>
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
