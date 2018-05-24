import React from 'react'
import { connect } from 'react-redux';
import LocalLabels from '../../labels/LocalLabels';
import { PanelGroup, Panel, Well } from 'react-bootstrap';

class PrivacyAndUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        terms: LocalLabels.getTermsOfUseLabels(props.app.session.languageCode)
        , privacy: LocalLabels.getPrivacyLabels(props.app.session.languageCode)
      }
    };
    this.getContent = this.getContent.bind(this);
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState(
        {
          labels: {
            terms: LocalLabels.getTermsOfUseLabels(nextProps.app.session.languageCode)
            , privacy: LocalLabels.getPrivacyLabels(nextProps.app.session.languageCode)
          }
        }
    )
  };

  getContent = () => {
    if (this.state.labels
        && this.state.labels.terms
        && this.state.labels.privacy
    ) {
      return (
        <div>
          <h2>{this.state.labels.terms.title} & {this.state.labels.privacy.title}</h2>
          <PanelGroup accordion id="terms.and.policy">
            <Panel header={this.state.labels.terms.title} eventKey="terms.panel">
              <Well>
                <div>{this.state.labels.terms.disclaimer}</div>
              </Well>
              <Well>
                <div>{this.state.labels.terms.liability}</div>
              </Well>
              <Well>
                <div>{this.state.labels.terms.release}</div>
              </Well>
              <Well>
                <div>{this.state.labels.terms.cancellation}</div>
              </Well>
              <Well>
                <div>{this.state.labels.terms.enhancements}</div>
              </Well>
              <Well>
                <div>{this.state.labels.terms.copyrights}</div>
              </Well>
              <Well>
                <div>{this.state.labels.terms.backups}</div>
              </Well>
            </Panel>
            <Panel header={this.state.labels.privacy.title} eventKey="privacy-panel">
              <Well>
                <h3>{this.state.labels.privacy.aboutThisPolicy}</h3>
                <div>{this.state.labels.privacy.aboutThisPolicyText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.personalDataUse}</h3>
                <div>{this.state.labels.privacy.personalDataUseText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.personalDataCollected}</h3>
                <div>{this.state.labels.privacy.personalDataCollectedText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.personalDataHowLong}</h3>
                <div>{this.state.labels.privacy.personalDataHowLongText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.thirdParty}</h3>
                <div>{this.state.labels.privacy.thirdPartyText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.personalDataSecurity}</h3>
                <div>{this.state.labels.privacy.personalDataSecurityText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.personalDataWhereStored}</h3>
                <div>{this.state.labels.privacy.personalDataWhereStoredText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.personalDataAdvertising}</h3>
                <div>{this.state.labels.privacy.personalDataAdvertisingText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.cookies}</h3>
                <div>{this.state.labels.privacy.cookiesText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.choicesAndRights}</h3>
                <div>{this.state.labels.privacy.choicesAndRightsText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.whoAreWe}</h3>
                <div>{this.state.labels.privacy.whoAreWeText}</div>
              </Well>
              <Well>
                <h3>{this.state.labels.privacy.optOut}</h3>
                <div>{this.state.labels.privacy.optOutText}</div>
              </Well>
            </Panel>
          </PanelGroup>
        </div>
      )
    }
  };
  render() {
    return (
        <div className="App-page App-page-terms">
          {this.getContent()}
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
export default connect(mapStateToProps) (PrivacyAndUse);
