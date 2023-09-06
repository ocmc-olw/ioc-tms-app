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
                : <Alert bsStyle="danger"><Glyphicon glyph="warning-sign" />Loading the web page...  If you see this message, it can mean your Internet connection is slow, or that the back-end server is being restarted.  If this message does not disappear within two minutes, please reload the page.</Alert>
            }
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <Row>
                      <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />
                        Attention OLW users in Australia and elsewhere!
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        OCMC is developing the next generation liturgical software called 'Doxa'.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        It combines the features of ALWB and OLW in a single application that can be run on your local computer.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ALWB is used to produce the Greek Orthodox Archdiocese of America's <a href='https://dcs.goarch.org' target='_blank'>DIGITAL CHANT STAND</a>.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Doxa will replace ALWB and will also power the future version of OLW on the Internet.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://us7.list-manage.com/contact-form?u=5cda59d72a32e019e8f560398&form_id=2c82c6e7fd711b0ce9c377742de573d4' target='_blank'><span>CONTACT</span></a> us if there are features you would like to see.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://eepurl.com/hJZnfT' target='_blank'>SUBSCRIBE</a> to our liturgical software newsletter to learn when Doxa will be released.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Our software is always open-source and always provided at no cost.
                      </Alert>
                    </Row>

                    <p> {this.state.labels.thisClass.p1}</p>
                    <p> {this.state.labels.thisClass.p2}</p>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {this.state.labels.thisClass.msg1}</Alert>
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
                : <Alert bsStyle="success"><Glyphicon glyph="success" />Loading the web page... If you see this message, it can mean your Internet connection is slow, or that the back-end server is being restarted.  If this message does not disappear within two minutes, please reload the page.</Alert>
            }
            <Row>
              <Grid>
                <Alert bsStyle="info"><Glyphicon glyph="bullhorn" />
                  Attention OLW users in Australia and elsewhere!
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  OCMC is developing the next generation liturgical software called 'Doxa'.
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  It combines the features of ALWB and OLW in a single application that can be run on your local computer.
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ALWB is used to produce the Greek Orthodox Archdiocese of America's <a href='https://dcs.goarch.org' target='_blank'>DIGITAL CHANT STAND</a>.
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Doxa will replace ALWB and will also power the future version of OLW on the Internet.
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href='https://us7.list-manage.com/contact-form?u=5cda59d72a32e019e8f560398&form_id=2c82c6e7fd711b0ce9c377742de573d4' target='_blank'><span>CONTACT</span></a> us if there are features you would like to see.
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href='https://eepurl.com/hJZnfT' target='_blank'>SUBSCRIBE</a> to our liturgical software newsletter to learn when Doxa will be released.
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Our software is always open-source and always provided at no cost.
                </Alert>
              </Grid>
            </Row>
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p> {this.state.labels.thisClass.p1}</p>
                    <p> {this.state.labels.thisClass.p2}</p>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> This web application should be used with Google Chrome or Apple Safari. If you use it with another browser it might not work properly.</Alert>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> {this.state.labels.thisClass.msg1}</Alert>
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