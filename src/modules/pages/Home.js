/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import Hymnographers from '../components/images/Hymnographers';
import KenyaDeaconCensing from '../components/images/KenyaDeaconCensing';
import Scriptorium from '../components/images/Scriptorium';
import {Alert, Glyphicon, Col, Grid, Jumbotron, Row} from 'react-bootstrap'
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
                : <Alert bsStyle="danger"><Glyphicon glyph="warning-sign" /> The application cannot be used at this time.  We apologize for the inconvenience. We are working to restore service as soon as possible.</Alert>
            }
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p> {this.state.labels.thisClass.p1}</p>
                    <p> {this.state.labels.thisClass.p2}</p>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {this.state.labels.thisClass.msg1}</Alert>
                    <Alert bsStyle="info"><Glyphicon glyph="bullhorn" /> If you want to work with us to add your language to the user interface, or the translation of the liturgical texts in your language, please contact us. We are especially looking for volunteers to translate the user interface for this website into: Arabic, Chinese, French, Spanish, and Swahili. Also, we are looking for volunteers to enter officially approved Arabic, Chinese, French, Spanish, and Swahili translations of the liturgical texts. See how to contact us by looking at the bottom of the About page.</Alert>
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
              : <Alert bsStyle="danger"><Glyphicon glyph="warning-sign" /> The application cannot be used at this time.  We apologize for the inconvenience. We are working to restore service as soon as possible.</Alert>
            }
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p> {this.state.labels.thisClass.p1}</p>
                    <p> {this.state.labels.thisClass.p2}</p>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> This web application should be used with Google Chrome or Apple Safari. If you use it with another browser it might not work properly.</Alert>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {this.state.labels.thisClass.msg1}</Alert>
                    <Alert bsStyle="info"><Glyphicon glyph="bullhorn" /> If you want to work with us to add your language to the user interface, or the translation of the liturgical texts in your language, please contact us. We are especially looking for volunteers to translate the user interface for this website into: Arabic, Chinese, French, Spanish, and Swahili. Also, we are looking for volunteers to enter officially approved Arabic, Chinese, French, Spanish, and Swahili translations of the liturgical texts. See how to contact us by looking at the bottom of the About page.</Alert>
                  </Col>
                  <Col xs={4} md={4}>
                    <Hymnographers />
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
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