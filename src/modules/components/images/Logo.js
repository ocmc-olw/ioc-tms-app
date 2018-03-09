import React from 'react'
import PropTypes from 'prop-types';

import logoOcmc from './graphics/ocmc-globe-3.jpg';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    let logo = undefined;
    if (props.client === "ages") {
      logo = logoOcmc; //logoAges;
    } else {
      logo = logoOcmc;
    };
    this.state = {
      logo: logo
    }
  };
  render() {
    if (this.props.client === "ages") {
      return (
          <div className="App-img-logo-ages-div">
            <span className="App-img-logo-ages">AGES</span>
            <span className="App-img-logo-ages-initiatives">Initiatives</span>
          </div>
      );
    } else if (this.props.client === "scriptorium") {
      return (
          <div className="App-img-logo-scriptorium-div">
            <span className="App-img-logo-scriptorium">The Scriptorium</span>
          </div>
      );
    } else {
      return <img className="App-img App-img-logo" alt="IOC-TMS Logo" role="presentation" src={this.state.logo} height="36px" width="120px"/>
    }
  }
};

Logo.propTypes = {
  client: PropTypes.string
};

Logo.defaultProps = {
  client: "ocmc"
};
export default Logo;

