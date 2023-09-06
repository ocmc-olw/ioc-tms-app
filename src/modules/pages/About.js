import React from 'react'
import server from '../../config/server';
import Email from "../components/images/SsEmailContact"
import {AboutDatabase, Configuration} from 'ioc-liturgical-react'
import VersionNumbers from "../../config/VersionNumbers";
import { connect } from 'react-redux';
import {Alert, Col, Glyphicon, Grid, Jumbotron, PageHeader, Row} from 'react-bootstrap';
import YouTube from 'react-youtube';
import PrivacyAndUse from './PrivacyAndUse';
//import Hymnographers from "../components/images/Hymnographers";

class About extends React.Component {
  constructor(props) {
    super(props);

    let labels = props.app.session.localLabels;
    let labelTopics = props.app.session.labelTopics;

    console.log(props);
    this.state = {
      labels: {
        about: labels[labelTopics.about]
      }
      , presentations: {
        aristotle2018: "https://liml.org/static/presentations/2018-06-04-Colburn-Olw.pdf"
      }
      , video: {
        introServiceGen: "jPqDaHl6TpM"
        , commentary: "9RzC7jIpCEM"
        , commentaryGreek: "9vFN_QsQa38"
        ,  opts: {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
            , modestbranding: 1
            , rel: 0
          }
        }
      }
    };
    this.onReady = this.onReady.bind(this);
    this.getCommentaryVideo = this.getCommentaryVideo.bind(this);
  }
  componentWillReceiveProps = (nextProps) => {
    let labels = nextProps.app.session.localLabels;
    let labelTopics = nextProps.app.session.labelTopics;
    this.setState(
        {
          labels: {
            about: labels[labelTopics.about]
          }
        }
    )
  };

  onReady = (event) => {
    event.target.pauseVideo();
  };


  getCommentaryVideo = () => {
    let videoId = this.state.video.commentary;
    if (this.props
      && this.props.app
      && this.props.app.session
      && this.props.app.session.languageCode === "el") {
      videoId = this.state.video.commentaryGreek;
    }
    return (
        <YouTube
            className="App-Youtube-player"
            videoId={videoId}
            opts={this.state.video.opts}
            onReady={this.onReady}
        />
    );
  };

  render() {
    const version = VersionNumbers.getPackageNumber();
    const developersSought = "Go software developers sought: we are working on the next generation of tools for liturgical translators and publishers of liturgical services and texts. This is an open source project.  The user interface will continue to be written using React JS, but the back end will be re-written using the Go programming language.  We also intend to extend the functionality of OLW so that it can replace AGES Liturgical Workbench (ALWB).  ALWB is the software used by Fr. Seraphim Dedes to generate the services on the AGES, Initiatives website.  We are seeking volunteers who have at least three years professional experience programming in Go, C, or C++, or Java.  Experienced programmers who do not know Go, but are willing to learn it will be considered.  If you are interested in volunteering for this project, contact us using the email at the bottom of this page."
    const wbtSought = "Former members of the Wycliffe Bible Translators sought. If you are an Eastern Orthodox Christian and worked as a Bible translator or a Translation Consultant with WBT/SIL, or a similar organization, please consider volunteering your time to help us create translation aids and courses for liturgical translators.  In a few years, we plan to hold one to two week translation courses and/or workshops in various locations world-wide.  If you are interested in participating in these short-term mission trips or in helping to create translator’s aids please contact us using the email at the bottom of this page.."
    const templateBuildersSought = "Template builders sought: Both the AGES Liturgical Workstation and OLW (this application) make use of reusable templates that describe the order, content, and format of liturgical books and services.  If you are a detail-oriented person, comfortable using computers and willing to learn new software, please consider volunteering to help us ioc-tms-website.v2023.06.02.01 new templates. You must also be able to read and type Greek words using the Greek alphabet. This is necessary in order to search the OLW database and find the correct text ID to use in a template. You do not need to fully understand the meaning of the text, but be proficient enough to compare two short texts in Greek and know whether they are the same or differ.  If you are interested, please contact us using the email at the bottom of this page."
    const annotatorsSought = "Annotators sought: We are working to annotate the liturgical texts with information about referents they make.  For example, there are hymns that refer to the Theotokos, but do not use that word.  By annotating such hymns, it is possible to search our database and find all hymns that refer to the Theotokos.  The annotations include references to the Persons of the Holy Trinity, the mysteries, people, places, plants, animals, events, etc. We are seeking people who have a degree from an Orthodox institution of higher education and have the ability to read liturgical Greek. If you are interested, contact us using the email at the bottom of this page."
    const commentatorsSought = "Commentators sought: OLW provides tools for the creation of commentaries on liturgical texts. Such commentaries are useful to translators and researchers.  While primarily technical in nature, they can be of use to other people.  If you have an advanced degree from an Orthodox institution of higher education and are able to read liturgical Greek, and would like to volunteer to develop commentaries on hymns and other liturgical texts, please contact us using the email at the bottom of this page."
    const linguistsSought = "Linguists sought: We are developing grammatical annotations of liturgical Greek texts and syntactic analyses using dependency grammar.  Please note that the word 'linguist' here refers to someone formally trained in linguistics not someone who speaks many languages. Watch the second video on this page to see a demo of the grammatical analysis tools in OLW. If you are interested in volunteering time, and you have worked at least three years professionally in the field of linguistics, and hold a graduate degree in linguistics, and are competent in the analysis of Greek texts, please contact us using the email at the bottom of this page."
    return (
        <div className="App-page App-page-about">
          <PageHeader>{this.state.labels.about.title}</PageHeader>
          <Jumbotron>
            <p>{this.state.labels.about.p1}
            <a rel="noopener noreferrer" href="https://www.ocmc.org/" target="_blank"> (OCMC)</a>
            </p>
            <p>{this.state.labels.about.p2}</p>
            <p>{this.state.labels.about.p3}</p>
            <p>{this.state.labels.about.p4}</p>
          </Jumbotron>
          <PageHeader>{this.state.labels.about.userFeaturesTitle}</PageHeader>
          <Jumbotron>
            <p>{this.state.labels.about.userFeaturesIntro}</p>
            <ol>
              <li className="App-about-list-item">{this.state.labels.about.userFeature01}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature02}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature03}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature04}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature05}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature06}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature07}</li>
            </ol>
            <YouTube
                className="App-Youtube-player"
                videoId={this.state.video.introServiceGen}
                opts={this.state.video.opts}
                onReady={this.onReady}
            />
            <div>{this.state.labels.about.aboutVideo01}</div>
          </Jumbotron>
          <PageHeader>{this.state.labels.about.annotatorFeaturesTitle}</PageHeader>
          <Jumbotron>
            <p>{this.state.labels.about.annotatorFeaturesIntro}</p>
            <ol>
              <li className="App-about-list-item">{this.state.labels.about.annotatorFeature01}</li>
              <li className="App-about-list-item">{this.state.labels.about.annotatorFeature02}</li>
              <li className="App-about-list-item">{this.state.labels.about.annotatorFeature03}</li>
              <li className="App-about-list-item">{this.state.labels.about.annotatorFeature04}</li>
              <li className="App-about-list-item">{this.state.labels.about.annotatorFeature05}</li>
            </ol>
            {this.getCommentaryVideo()}
          </Jumbotron>
          <PageHeader>{this.state.labels.about.securityFeaturesTitle}</PageHeader>
          <Jumbotron>
            <p>{this.state.labels.about.securityFeaturesIntro}</p>
            <ol>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature01}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature02}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature03}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature04}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature05}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature06}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature07}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature08}</li>
            </ol>
          </Jumbotron>
          <PageHeader>{this.state.labels.about.presentations}</PageHeader>
          <Jumbotron>
            <ol>
              <li className="App-about-list-item"><a href={this.state.presentations.aristotle2018} download>2018.06.04 - {this.state.labels.about.liturgics}. {this.state.labels.about.aristotle}.</a></li>
            </ol>
          </Jumbotron>
          <AboutDatabase
              session={this.props.app.session}
          />
          <Jumbotron>
            <Grid>
              <Row>
                <Col xs={8} md={8}>
                  <p>Volunteers Sought</p>
                  <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{developersSought}</Alert>
                  <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{wbtSought}</Alert>
                  <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{templateBuildersSought}</Alert>
                  <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{annotatorsSought}</Alert>
                  <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{commentatorsSought}</Alert>
                  <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{linguistsSought}</Alert>
                </Col>
              </Row>
            </Grid>
          </Jumbotron>

          <PrivacyAndUse/>
          {this.props.app.session.labels.pageAbout.contact} <Email />
          <p/>
          <Configuration
            session={this.props.app.session}
            appVersion={version}
            restServer={server.getWsServerPath()}
        />
      </div>
    )
  }
};

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
export default connect(mapStateToProps) (About);
