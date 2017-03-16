import React from 'react'
import Hymnographers from '../components/images/Hymnographers'
import {Col, Grid, Jumbotron, Row} from 'react-bootstrap'

export default React.createClass({
  render() {
    return (
    <div className="App-home">
      <h3 className="App-welcome">Welcome!</h3>
      <Jumbotron>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <p>Welcome to translators of the liturgical texts,</p>
            <p>and to scholars who are creating resources</p>
            <p>to help us understand the meaning of the texts!</p>
          </Col>
        </Row>
        <Row>
          <Col xs={3} md={3}>
          </Col>
          <Col xs={6} md={6}>
            <Hymnographers />
          </Col>
          <Col xs={3} md={3}>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p>Through the prayers of the Holy Hymnographers Saints Komas the Melodist, John of Damascus, and Nikodemos the Athenite, may our work be done in God, by Him, and through Him, to His glory and honor!</p>
          </Col>
        </Row>
      </Grid>
      </Jumbotron>
    </div>
    )
  }
})
