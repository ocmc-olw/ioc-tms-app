/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import Hymnographers from '../components/images/Hymnographers';
import KenyaDeaconCensing from '../components/images/KenyaDeaconCensing';
import Scriptorium from '../components/images/Scriptorium';
import {Alert, Glyphicon, Col, Grid, Jumbotron, Row, Well} from 'react-bootstrap'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Server from '../../config/server';
import Actions from "../../reducers/actionTypes";

class Home extends React.Component {


  constructor(props) {
    super(props);

    let labels = props.app.session.localLabels;
    let labelTopics = props.app.session.labelTopics;

    this.state = {
      labels: {
        thisClass: labels[labelTopics.home]
      }
      , location: document.location.hostname // "liml.org"
    };
    this.fetchAddress = this.fetchAddress.bind(this);
    this.handleAddressCallback = this.handleAddressCallback.bind(this);
    this.handleLocationCallback = this.handleLocationCallback.bind(this);

  };

  componentWillReceiveProps = (nextProps) => {

    let labels = nextProps.app.session.localLabels;
    let labelTopics = nextProps.app.session.labelTopics;

    this.setState({
      labels: {
        thisClass: labels[labelTopics.home]
      }
      , location: document.location.hostname // "liml.org"
    })
  };

  componentDidMount = () => {
    this.fetchAddress();
  };

  fetchAddress = () => {
    Server.restGetAddress(this.handleAddressCallback);
  };

  handleAddressCallback = (restCallResult) => {
    if (restCallResult) {
      if (restCallResult.status === 200) {
        Server.restGetLocation(restCallResult.ip, this.handleLocationCallback);
      }
    }
  };

  handleLocationCallback = (restCallResult) => {
    if (restCallResult && restCallResult.status === 200 && restCallResult.location) {
      this.props.dispatch(
          {
            type: Actions.SET_SESSION_LOCATION
            , location: restCallResult.location
          }
      );
    }
  };

  render() {
    const doxa = "OCMC is developing the next generation liturgical software called 'Doxa'.  It combines the features of ALWB and OLW in a single application that can be run on your local computer.  It will also power the future version of OLW on the Internet.  If there are features you would like to see, contact us using the email address at the bottom of the About page. We would also like to hear from you what you use OLW for. Let us know if you want to subscribe to the OCMC liturgical software newsletter."
    const volunteersSought = "Consider volunteering: Are you interested in contributing your knowledge and experience to help liturgical translators world-wide? We are seeking volunteers to assist in a variety of ways.  Check out the volunteer opportunities towards the bottom of the About page.";
    console.log(this.state.location);
    if (this.state.location === "olw.thescriptorium.us") {
      return (
          <div className="App-page App-home">
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p>Welcome!</p>
                  </Col>
                  <Col xs={4} md={4}>
                    <Scriptorium/>
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
          </div>
      );
    } else if (this.state.location === "liml.org") {
      return (
          <div className="App-page App-home">
            { this.props.app.session.db.domain ? <span></span>
                : <Alert bsStyle="danger"><Glyphicon glyph="warning-sign" />Loading the web page...  If you see this message, it can mean your Internet connection is slow, or that the back-end server is being restarted.  If this message does not disappear within two minutes, please reload the page.</Alert>
            }
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p> {this.state.labels.thisClass.p1}</p>
                    <p> {this.state.labels.thisClass.p2}</p>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {this.state.labels.thisClass.msg1}</Alert>
                    <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />
                      {doxa}
                    </Alert>
                    <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />
                      {volunteersSought}
                    </Alert>
                  </Col>
                  <Col xs={4} md={4}>
                    <KenyaDeaconCensing/>
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
          </div>
      );
    } else {
      return (
          <div className="App-page App-home">
            { this.props.app.session.db.domain ? <span></span>
                : <Alert bsStyle="danger"><Glyphicon glyph="warning-sign" />Loading the web page... If you see this message, it can mean your Internet connection is slow, or that the back-end server is being restarted.  If this message does not disappear within two minutes, please reload the page.</Alert>
            }
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p> {this.state.labels.thisClass.p1}</p>
                    <p> {this.state.labels.thisClass.p2}</p>
                    <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{doxa}</Alert>
                    <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />{volunteersSought}</Alert>
                    <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />Please check the Tweets at the bottom of the page for important announcements or news.</Alert>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> This web application should be used with Google Chrome or Apple Safari. If you use it with another browser it might not work properly.</Alert>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {this.state.labels.thisClass.msg1}</Alert>
                  </Col>
                  <Col xs={4} md={4}>
                    <Hymnographers />
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
            <Well>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="olw_ocmc"
                  options={{height: 400, width: 545}}
              />
            </Well>
          </div>
      );
    }
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
export default connect(mapStateToProps) (Home);