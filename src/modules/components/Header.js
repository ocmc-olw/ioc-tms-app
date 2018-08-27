import React from 'react';
import { Glyphicon, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import Actions from '../../reducers/actionTypes';
import Logo from './images/Logo';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    let location = document.location.hostname; // "liml.org";

    this.state = {
      location: location
      , titleLeft: location === "liml.org" ? "Liturgy in" : "Online Liturgical Workstation"
      , titleCenter: location === "liml.org" ? "My" : ""
      , titleRight: location === "liml.org" ? "Language" : ""
      , titleShort: location === "liml.org" ? "LIML" : "OLW"
    };

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  };

  handleLanguageChange = (event) => {
    if (event.target.id) {
      if (this.props.session
          && this.props.session.dropdowns
          && this.props.session.uiSchema
          && this.props.session.userInfo
      ) {
        this.props.dispatch(
            {
              type: Actions.SET_SESSION_LANGUAGE_CODE
              , code: event.target.id
              , dropdowns: this.props.session.dropdowns
              , uiSchema: this.props.session.uiSchema
              , userInfo: this.props.session.userInfo
            }
        );
      } else {
        this.props.dispatch(
            {
              type: Actions.SET_SESSION_LANGUAGE_CODE
              , code: event.target.id
            }
        );
      }
      event.preventDefault();
    }
  };

  render() {
    return (
        <div className="App-header">
          <Navbar fluid fixedTop inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <IndexLinkContainer to="/home">
                  <NavItem eventKey={1}>
                    <Logo/>
                    <span className="App-title-full">{this.state.titleLeft} <span className="titleCenter"> {this.state.titleCenter}</span> {this.state.titleRight}</span>
                    <span className="App-title-short">{this.state.titleShort}</span>
                  </NavItem>
                </IndexLinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                {this.props.app.session.displayAdditionalMenus
                  && this.props.app.session.userInfo.username === "wsadmin" ?
                    <LinkContainer to="/add">
                      <NavItem className="App-nav-item" eventKey={"add"}>{<FontAwesome className="App-header-ico"  name="plus"/>} {this.props.app.session.localLabels.add.menu}</NavItem>
                    </LinkContainer>
                    : ""
                }
                {this.props.app.session.displayAdditionalMenus ?
                    <NavDropdown eventKey={"edit"} title={<span><FontAwesome  className="App-header-ico" name="pencil-square-o"/> {this.props.app.session.localLabels.edit.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/editages"><NavItem className="App-submenu-item" eventKey={"edit.ages"} >{this.props.app.session.localLabels.edit.itemAges}</NavItem></LinkContainer>
                      {/*<LinkContainer to="/editoslw"><NavItem  className="App-submenu-item" eventKey={"edit.oslw"} >{this.props.app.session.localLabels.edit.itemOslw}</NavItem></LinkContainer>*/}
                      <LinkContainer to="/edittopic"><NavItem  className="App-submenu-item" eventKey={"edit.topic"} >{this.props.app.session.localLabels.edit.itemTopic}</NavItem></LinkContainer>
                      <MenuItem divider/>
                      {this.props.app.session.displayAdditionalMenus
                      && this.props.app.session.userInfo.domains.isLabelEditor ?
                          <LinkContainer to="/editlabels"><NavItem  className="App-submenu-item" eventKey={"edit.labels"} >{this.props.app.session.localLabels.edit.itemLabels}</NavItem></LinkContainer>
                          : ""
                      }
                      <LinkContainer to="/editschema"><NavItem  className="App-submenu-item" eventKey={"edit.schema"} >{this.props.app.session.localLabels.edit.itemSchEditor}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.session.displayAdditionalMenus ?
                    <NavDropdown eventKey={"generate"} title={<span><FontAwesome  className="App-header-ico" name="cogs"/> {this.props.app.session.localLabels.generate.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/generateages"><NavItem className="App-submenu-item" eventKey={"generate.ages"} >{this.props.app.session.localLabels.generate.itemAges}</NavItem></LinkContainer>
                      {/*<LinkContainer to="/generateoslw"><NavItem  className="App-submenu-item" eventKey={"generate.oslw"} >{this.props.app.session.localLabels.generate.itemOslw}</NavItem></LinkContainer>*/}
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.session.displayAdditionalMenus ?
                    <NavDropdown eventKey={"search"} title={<span><FontAwesome  className="App-header-ico" name="search"/> {this.props.app.session.localLabels.search.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/searchontology"><NavItem  className="App-submenu-item" eventKey={"search.ontology"} >{<FontAwesome className="App-header-sub-item-ico"  name="sitemap"/>}{this.props.app.session.localLabels.search.itemOntology}</NavItem></LinkContainer>
                      <LinkContainer to="/searchnotes"><NavItem  className="App-submenu-item" eventKey={"search.notes"} >{<FontAwesome className="App-header-sub-item-ico"  name="comment-o"/>}{this.props.app.session.localLabels.search.itemNote}</NavItem></LinkContainer>
                      <LinkContainer to="/searchtext"><NavItem  className="App-submenu-item" eventKey={"search.text"} >{<FontAwesome className="App-header-sub-item-ico"  name="file-text-o"/>}{this.props.app.session.localLabels.search.itemText}</NavItem></LinkContainer>
                      <LinkContainer to="/searchtextnotes"><NavItem  className="App-submenu-item" eventKey={"search.text.notes"} >{<FontAwesome className="App-header-sub-item-ico"  name="sticky-note"/>}{this.props.app.session.localLabels.search.itemTextNote}</NavItem></LinkContainer>
                      {this.props.app.session.userInfo.authenticated && this.props.app.session.userInfo.domains.isSuperAdmin ?
                          <LinkContainer to="/calendar"><NavItem  className="App-submenu-item" eventKey={"search.calendar"} >{<FontAwesome className="App-header-sub-item-ico"  name="calendar"/>}Calendar</NavItem></LinkContainer>
                          : ""
                      }
                    </NavDropdown>
                    :
                    <NavDropdown eventKey={"search"} title={<span><FontAwesome  className="App-header-ico" name="search"/> {this.props.app.session.localLabels.search.menu}</span>} id="notes-nav-dropdown">
                      {this.props.app.session.displayAdditionalMenus && this.props.app.session.userInfo.domains.isSuperAdmin ?
                          <LinkContainer to="/calendar"><NavItem  className="App-submenu-item" eventKey={"search.calendar"} >{<FontAwesome className="App-header-sub-item-ico"  name="calendar"/>}Calendar</NavItem></LinkContainer>
                      : ""
                      }
                      <LinkContainer to="/searchtext"><NavItem  className="App-submenu-item" eventKey={"search.text"} >{<FontAwesome className="App-header-sub-item-ico"  name="file-text-o"/>}{this.props.app.session.localLabels.search.itemText}</NavItem></LinkContainer>
                    </NavDropdown>
                }
                {this.props.app.session.displayAdditionalMenus
                  && this.props.app.session.userInfo.domains.isSuperAdmin ?
                    <LinkContainer to="/admin">
                      <NavItem eventKey={5}>{<FontAwesome className="App-header-ico"  name="lock"/>} {this.props.app.session.localLabels.administer.menu}</NavItem>
                    </LinkContainer>
                    : ""
                }
                <LinkContainer to="/about">
                  <NavItem eventKey={4}>{<FontAwesome className="App-header-ico" name="info-circle"/>} {this.props.app.session.labels.header.about}</NavItem>
                </LinkContainer>
                <LinkContainer to="/help">
                  <NavItem eventKey={6}>{<FontAwesome className="App-header-ico"  name="question-circle"/>} {this.props.app.session.labels.header.help}</NavItem>
                </LinkContainer>
                <NavDropdown className="App-nav-dropdown" eventKey={7} title={<span><FontAwesome  className="App-header-ico" name="flag"/><span className="App-lang-code">{this.props.app.session.languageCode}</span></span>} id="basic-nav-dropdown">
                  <MenuItem eventKey={7.1} id="el" onClick={this.handleLanguageChange}>el - Ελληνικά</MenuItem>
                  <MenuItem eventKey={7.2} id="en" onClick={this.handleLanguageChange}>en - English</MenuItem>
                </NavDropdown>
                {this.props.app.session.displayAdditionalMenus ?
                    <NavDropdown className="App-nav-dropdown" eventKey={8} title={<FontAwesome  className="App-header-ico" name="user-o"/>} id="basic-nav-dropdown">
                      <LinkContainer to="/download"><NavItem eventKey={8.1} >{<Glyphicon glyph="download-alt"/>} {this.props.app.session.labels.header.myRecords}</NavItem></LinkContainer>
                      <LinkContainer to="/password"><NavItem eventKey={8.2} >{<FontAwesome className="App-header-ico"  name="key"/>} {this.props.app.session.labels.header.password}</NavItem></LinkContainer>
                      <LinkContainer to="/logout"><NavItem eventKey={8.3} >{<Glyphicon glyph="log-out"/>} {this.props.app.session.labels.header.logout}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    <NavDropdown className="App-nav-dropdown" eventKey={8} title={<FontAwesome  className="App-header-ico" name="user-o"/>} id="basic-nav-dropdown">
                          <LinkContainer to="/login"><NavItem eventKey={8.1} >{<Glyphicon glyph="log-in"/>} {this.props.app.session.labels.header.login}</NavItem></LinkContainer>
                    </NavDropdown>
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
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
export default connect(mapStateToProps) (Header);
