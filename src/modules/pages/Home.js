/**
 * Created by mac002 on 12/7/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import Hymnographers from '../components/images/Hymnographers';
import Scriptorium from '../components/images/Scriptorium';
import {Alert, Glyphicon, Col, Grid, Jumbotron, Row} from 'react-bootstrap'

class Home extends React.Component {

  render() {
    if (document.location.hostname === "olw.thescriptorium.us") {
      return (
          <div className="App-page App-home">
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p>Welcome!</p>
                  </Col>
                  <Col xs={4} md={4}>
                    <Scriptorium />
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
          </div>
      );
    } else {
      return (
          <div className="App-page App-home">
            <Jumbotron>
              <Grid>
                <Row>
                  <Col xs={8} md={8}>
                    <p>Welcome to translators of the liturgical texts, and to scholars who are creating resources to help us understand the meaning of the texts!</p>
                    <p>Through the prayers of the Holy Hymnographers Saints Komas the Melodist, John of Damascus, and Nikodemos the Athenite, may our work be done in God, by Him, and through Him, to His glory and honor!</p>
                    <Alert bsStyle="info"><Glyphicon glyph="warning-sign" /> This is the beta-test version. Beta testers - please report issues or change requests to Michael Colburn.</Alert>
                    <Alert bsStyle="warning"><Glyphicon glyph="warning-sign" /> From time to time, we need to update the web app or the database. If you suddenly see messages about network errors or something not being available, wait a few minutes and try again.</Alert>
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