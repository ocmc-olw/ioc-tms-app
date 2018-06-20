/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import {HelpSearch, Html5VideoPanel, YoutubeVideoPanel} from 'ioc-liturgical-react';
import { connect } from 'react-redux';
import {
  Accordion
  , Alert
  , Glyphicon
  , Well
} from 'react-bootstrap';

export class Help extends React.Component {
  constructor(props) {
    super(props);

    let labels = props.app.session.localLabels;
    let labelTopics = props.app.session.labelTopics;

    this.state = {
      labels: {
        thisClass: labels[labelTopics.help]
      }
      , videoId: {
        createNote: "xSm56wJBdWk"
        , createTag: "hsh06ECDgIg"
        , dailyReadings: "_sTYUtxiZGM"
        , downloadUserFiles: "BaYW8gFOQjE"
        , enterTranslation: "6aqw7MJhMx8"
        , generateService: "K6izGk5hJVs"
        , grammar: "RRrSvQzv5sA"
        , language: "o2IZx4JE4y4"
        , menu: "0_kw1VYY2i4"
        , searchTag: "d-KsviCPTzY"
        , searchNotes: "QOeiwGjs3vo"
        , selectService: "WM6aPV6cNZg"
        , logon: "dwtervZaeQo"
        , labelEditor: "0KlOmmlGV4o"
      }
    };
  }
  componentWillReceiveProps = (nextProps) => {
    let labels = nextProps.app.session.localLabels;
    let labelTopics = nextProps.app.session.labelTopics;
    this.setState(
        {
          labels: {
            thisClass: labels[labelTopics.help]
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
            <YoutubeVideoPanel
                title={this.state.labels.thisClass.videoMenuOverview}
                text={this.state.labels.thisClass.videoMenuOverviewText}
                videoId={this.state.videoId.menu}
                eventKey={"MenuOverview"}
            />
            <YoutubeVideoPanel
              eventKey={"videoLogon"}
              title={this.state.labels.thisClass.videoLogon}
              videoId={this.state.videoId.logon}
              text={this.state.labels.thisClass.videoLogonText}
            />
            <YoutubeVideoPanel
                eventKey={"videoChangeLanguage"}
                title={this.state.labels.thisClass.videoChangeLanguage}
                videoId={this.state.videoId.language}
                text={this.state.labels.thisClass.videoChangeLanguageText}
            />
            <YoutubeVideoPanel
                eventKey={"videoSelectService"}
                title={this.state.labels.thisClass.videoSelectService}
                videoId={this.state.videoId.selectService}
                text={this.state.labels.thisClass.videoSelectServiceText}
            />
            <YoutubeVideoPanel
                eventKey={"videoGenerateService"}
                title={this.state.labels.thisClass.videoGenerateService}
                videoId={this.state.videoId.generateService}
                text={this.state.labels.thisClass.videoGenerateServiceText}
            />
            <YoutubeVideoPanel
                eventKey={"videoEnterTranslation"}
                title={this.state.labels.thisClass.videoEnterTranslation}
                videoId={this.state.videoId.enterTranslation}
                text={this.state.labels.thisClass.videoEnterTranslationText}
            />
            <YoutubeVideoPanel
                eventKey={"videoCreateNote"}
                title={this.state.labels.thisClass.videoCreateNote}
                videoId={this.state.videoId.createNote}
                text={this.state.labels.thisClass.videoCreateNoteText}
            />
            <Html5VideoPanel
                eventKey={"videoSearchTexts"}
                title={this.state.labels.thisClass.videoSearchText}
                text={this.state.labels.thisClass.videoSearchTextText}
            />
          <YoutubeVideoPanel
              eventKey={"videoSearchNotes"}
              title={this.state.labels.thisClass.videoSearchNotes}
              videoId={this.state.videoId.searchNotes}
              text={this.state.labels.thisClass.videoSearchNotesText}
          />
          <YoutubeVideoPanel
              eventKey={"videoCreateTag"}
              title={this.state.labels.thisClass.videoCreateTag}
              videoId={this.state.videoId.createTag}
              text={this.state.labels.thisClass.videoCreateTagText}
          />
          <YoutubeVideoPanel
              eventKey={"videoTagSearch"}
              title={this.state.labels.thisClass.videoTagSearch}
              videoId={this.state.videoId.searchTag}
              text={this.state.labels.thisClass.videoTagSearchText}
          />
          <YoutubeVideoPanel
              eventKey={"videoNoteDownload"}
              title={this.state.labels.thisClass.videoNoteDownload}
              videoId={this.state.videoId.downloadUserFiles}
              text={this.state.labels.thisClass.videoNoteDownloadText}
          />
          <YoutubeVideoPanel
              eventKey={"videoGrammar"}
              title={this.state.labels.thisClass.videoGrammar}
              videoId={this.state.videoId.grammar}
              text={this.state.labels.thisClass.videoGrammarText}
          />
          <YoutubeVideoPanel
              eventKey={"videoDailyReadings"}
              title={this.state.labels.thisClass.videoDailyReadings}
              videoId={this.state.videoId.dailyReadings}
              text={this.state.labels.thisClass.videoDailyReadingsText}
          />
          <YoutubeVideoPanel
              eventKey={"videoLabelEdtior"}
              title={this.state.labels.thisClass.videoLabelEditor}
              videoId={this.state.videoId.labelEditor}
              text={this.state.labels.thisClass.videoLabelEditorText}
          />
        </Accordion>
        <HelpSearch session={this.props.app.session}/>
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
