import React from 'react'
import Hymnographers from './graphics/KosmasJohnDNiko.png'
import {Image} from 'react-bootstrap'

export default React.createClass({
  render() {
    return (
        <Image className="App-hymnographers-icon" src={Hymnographers} responsive/>
    )
  }
})
