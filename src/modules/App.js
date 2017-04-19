import React from 'react'
import Header from './components/Header'
import {Labels} from 'ioc-liturgical-react';
import Logo from './components/images/Logo';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: {
        language: "en"
        , labels: {
          resultsTable: Labels.labels.en.resultsTable
          , linkSearchResultsTable: Labels.labels.en.linkSearchResultsTable
          , header: Labels.labels.en.header
          , help: Labels.labels.en.help
          , pageAbout: Labels.labels.en.pageAbout
          , pageLogin: Labels.labels.en.pageLogin
          , search: Labels.labels.en.search
          , searchLinks: Labels.labels.en.searchLinks
          , ldp: Labels.labels.en.ldp
        }
      }
    }
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  };


  componentWillMount = () => {

  }

  handleLanguageChange = (code) => {
    if (code.length > 0 && code !== "undefined") {
      this.setState({
        language: {
          code: code
          , labels: {
            resultsTable: Labels.labels[code].resultsTable
            , linkSearchResultsTable: Labels.labels[code].linkSearchResultsTable
            , header: Labels.labels[code].header
            , help: Labels.labels[code].help
            , pageAbout: Labels.labels[code].pageAbout
            , pageLogin: Labels.labels[code].pageLogin
            , search: Labels.labels[code].search
            , searchLinks: Labels.labels[code].searchLinks
            , ldp: Labels.labels[code].ldp
          }
        }
      });
    }
  };

  render() {
    return (
        <div className="App">
          <Logo/>
          <Header
              language={this.state.language.code}
              labels={this.state.language.labels.header}
              changeHandler={this.handleLanguageChange.bind(this)}
          />
          <div className="row App-content-row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              {this.props.children && React.cloneElement(this.props.children, {
                labels: {
                resultsTable: this.state.language.labels.resultsTable
                , linkSearchResultsTable: this.state.language.labels.linkSearchResultsTable
                , header: this.state.language.labels.header
                , help: this.state.language.labels.help
                , pageAbout: this.state.language.labels.pageAbout
                , pageLogin: this.state.language.labels.pageLogin
                , search: this.state.language.labels.search
                  , searchLinks: this.state.language.labels.searchLinks
                  , ldp: this.state.language.labels.ldp
              }
              })
              }
            </div>
          </div>
        </div>
    )
  }
}

export default App;
