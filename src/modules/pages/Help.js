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
        <h1>Help Page</h1>
        <Well>
        <p>Below you can find instructions on how to do various things.  There are also videos. Even if you do not usually watch videos to learn how to use software, please do watch the video on the Grammar Explorer.  Also, it is important to read the 'How to Search the Liturgical Database'. You will better understand how the database works.</p>
        <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {"It can take a few seconds or longer for a video to load.  How long it takes depends on your Internet speed.  If a video does not start playing right away, please wait."}</Alert>
        </Well>
        <h2>{this.state.labels.thisClass.videos}</h2>
        <Accordion>
            <HelpPanel
                eventKey={"videoMenuOverview"}
                title={this.state.labels.thisClass.videoMenuOverview}
                url={"https://liml.org/static/video/olw-menu.mp4"}
                text={"The menu bar provides access to the various tools that are available.  After you login you will see more options."}
            />
            <HelpPanel
              eventKey={"videoLogon"}
              title={this.state.labels.thisClass.videoLogon}
              url={"https://liml.org/static/video/olw-login.mp4"}
              text={"Click the 'person' on the right of the menu bar.  Then click 'Logon'."}
            />
            <HelpPanel
                eventKey={"videoChangeLanguage"}
                title={this.state.labels.thisClass.videoChangeLanguage}
                url={"https://liml.org/static/video/olw-multi-language.mp4"}
                text={"To change the language of the user interface, click a flag that represents the language you want. Contact us if you want to help us add your language to the user interface."}
            />
            <HelpPanel
                eventKey={"videoSelectService"}
                title={this.state.labels.thisClass.videoSelectService}
                url={"https://liml.org/static/video/olw-ages-selector.mp4"}
                text={"Both the Editor and Generator allow you to select an AGES service or book template. These templates are reusable for any language that is in the database."}
            />
            <HelpPanel
                eventKey={"videoGenerateService"}
                title={this.state.labels.thisClass.videoGenerateService}
                url={"https://liml.org/static/video/olw-generator.mp4"}
                text={"You can generate services or books for one, two, or three languages side-by-side. If some part has not been translated yet for the language you select, you will see English or Greek instead.  These are called 'fallback' languages."}
            />
            <HelpPanel
                eventKey={"videoEnterTranslation"}
                title={this.state.labels.thisClass.videoEnterTranslation}
                url={"https://liml.org/static/video/olw-editor-enter-translation.mp4"}
                text={"You can enter the translation of texts of libraries for which you have authorization. Select Editor > Using AGES DCS, then select the template you want to use and the library for which you are translating."}
            />
            <HelpPanel
                eventKey={"videoCreateNote"}
                title={this.state.labels.thisClass.videoCreateNote}
                url={"https://liml.org/static/video/olw-ages-text-notes.mp4"}
                text={"If you are authorized, when you are in the Editor for a text, you can create notes about the text."}
            />
            <HelpPanel
                eventKey={"videoSearchTexts"}
                title={this.state.labels.thisClass.videoSearchTexts}
                url={"https://liml.org/static/video/olw-searching-text.mp4"}
                text={"You can search the liturgical and biblical texts.  On the menu bar, click Search > Text. Further down on this page is a larger section on ''How to Search the Database', which you provide you more information."}
            />
          <HelpPanel
              eventKey={"videoSearchNotes"}
              title={this.state.labels.thisClass.videoSearchNotes}
              url={"https://liml.org/static/video/olw-searching-text-notes.mp4"}
              text={"You can search the content of notes.  On the menu bar, click Search > Personal Notes, or Search > Text Notes."}
          />
          <HelpPanel
              eventKey={"videoCreateTag"}
              title={this.state.labels.thisClass.videoCreateTag}
              url={"https://liml.org/static/video/olw-text-notes-tags-creating.mp4"}
              text={"You can add tags to notes.  This will allow you to find notes that have a tag you are interested in."}
          />
          <HelpPanel
              eventKey={"videoTagSearch"}
              title={this.state.labels.thisClass.videoTagSearch}
              url={"https://liml.org/static/video/olw-text-notes-tags-searching.mp4"}
              text={"You can search notes using tags.  In the menu, select Search.  You can search 'Personal Notes' or 'Text Notes'."}
          />
          <HelpPanel
              eventKey={"videoNoteDownload"}
              title={this.state.labels.thisClass.videoNoteDownload}
              url={"https://liml.org/static/video/olw-my-records.mp4"}
              text={"You can search download your notes.  In the menu, select the user icon (it looks like a person), then select 'My Records'."}
          />
          <HelpPanel
              eventKey={"videoGrammar"}
              title={this.state.labels.thisClass.videoGrammar}
              url={"https://liml.org/static/video/olw-grammar.mp4"}
              text={"The Grammar Explorer provides quick links to lexicons. If available for the text you are viewing, there will also be a Dependency Diagram that provides both morphological and syntact information. If you are authorized, there is a Tagger tool that allows you to annotate each word with its grammatical tags and dependency information."}
          />
          <HelpPanel
              eventKey={"videoDailyReadings"}
              title={this.state.labels.thisClass.videoDailyReadings}
              url={"https://liml.org/static/video/olw-daily-readings.mp4"}
              text={this.state.labels.thisClass.videoDailyReadingsBlurb}
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
