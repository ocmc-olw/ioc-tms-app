/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import Hymnographers from '../components/images/Hymnographers';
import KenyaDeaconCensing from '../components/images/KenyaDeaconCensing';
import Scriptorium from '../components/images/Scriptorium';
import {Alert, Glyphicon, Col, Grid, Jumbotron, Row} from 'react-bootstrap'
import LocalLabels from '../../labels/LocalLabels';

class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      labels: {
        thisClass: LocalLabels.getAboutHomeLabels(props.app.session.languageCode)
      }
      , location: document.location.hostname // "liml.org"
    }
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      labels: {
        thisClass: LocalLabels.getAboutHomeLabels(nextProps.app.session.languageCode)
      }
      , location: document.location.hostname // "liml.org"
    })
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
                    <Alert bsStyle="info"><Glyphicon glyph="warning-sign" /> This is the beta-test version. Beta testers - please report issues or change requests to Michael Colburn.</Alert>
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
                    <Alert bsStyle="info"><Glyphicon glyph="warning-sign" /> This is the beta-test version. Beta testers - please report issues or change requests to Michael Colburn.</Alert>
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