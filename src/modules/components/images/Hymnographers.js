import React from 'react'
import hymnographers from './graphics/KosmasJohnDNikoA.jpg'
import {Image} from 'react-bootstrap'

class Hymnographers extends React.Component {
  render() {
    return (
        <Image className="App-hymnographers-icon" src={hymnographers} responsive/>
    )
  }
}
export default Hymnographers;
