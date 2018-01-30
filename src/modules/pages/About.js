import React from 'react'
import server from '../../config/server';
import Email from "../components/images/SsEmailContact"
import {AboutDatabase, Configuration} from 'ioc-liturgical-react'
import VersionNumbers from "../../config/VersionNumbers";
import { connect } from 'react-redux';
import LocalLabels from '../../labels/LocalLabels';
import { Jumbotron, PageHeader } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        about: LocalLabels.getAboutTmsLabels(props.app.session.languageCode)
      }
    }
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState(
        {
          labels: {
            about: LocalLabels.getAboutTmsLabels(nextProps.app.session.languageCode)
          }
        }
    )
  }

    render() {
    const version = VersionNumbers.getPackageNumber();
    return (
        <div className="App-page App-page-about">
          <PageHeader>{this.state.labels.about.title}</PageHeader>
          <Jumbotron>
            <p>{this.state.labels.about.p1}
            <a rel="noopener noreferrer" href="http://www.ocmc.org/" target="_blank"> (OCMC)</a>
            </p>
            <p>{this.state.labels.about.p2}</p>
            <p>{this.state.labels.about.p3}</p>
          </Jumbotron>
          <PageHeader>{this.state.labels.about.userFeaturesTitle}</PageHeader>
          <Jumbotron>
            <p>{this.state.labels.about.userFeaturesIntro}</p>
            <ol>
              <li className="App-about-list-item">{this.state.labels.about.userFeature01}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature02}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature03}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature04}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature05}</li>
              <li className="App-about-list-item">{this.state.labels.about.userFeature06}</li>
            </ol>
          </Jumbotron>
          <PageHeader>{this.state.labels.about.securityFeaturesTitle}</PageHeader>
          <Jumbotron>
            <p>{this.state.labels.about.securityFeaturesIntro}</p>
            <ol>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature01}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature02}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature03}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature04}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature05}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature06}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature07}</li>
              <li className="App-about-list-item">{this.state.labels.about.securityFeature08}</li>
            </ol>
          </Jumbotron>
          <AboutDatabase labels={this.props.app.session.labels.pageAbout}/>
          {this.props.app.session.labels.pageAbout.contact} <Email />
          <p/>
          <Configuration
            appVersion={version}
            appVersionLabel={this.props.app.session.labels.pageAbout.appVersion}
            restServer={server.getWsServerPath()}
            restServerLabel={this.props.app.session.labels.pageAbout.RestServer}
            wsVersionLabel={this.props.app.session.labels.pageAbout.wsVersion}
            dbServerLabel={this.props.app.session.labels.pageAbout.DbServer}
            synchEnabledLabel={this.props.app.session.labels.pageAbout.synchEnabled}
            synchDbConnectionOkLabel={this.props.app.session.labels.pageAbout.synchDbConnectionOk}
        />
      </div>
    )
  }
};

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
export default connect(mapStateToProps) (About);
