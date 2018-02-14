import React from 'react'
import theSource from './graphics/Invention_of_Printing_p149.jpg';
import {Image} from 'react-bootstrap';

class Scriptorium extends React.Component {
  render() {
    return (
        <Image className="App-scriptorium-icon" src={theSource} responsive/>
    )
  }
}
export default Scriptorium;
