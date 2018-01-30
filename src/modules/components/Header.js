import React from 'react';
import { Glyphicon, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import {Flag} from 'ioc-liturgical-react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import Actions from '../../reducers/actionTypes';
import Logo from './images/Logo';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {someProp: ""}

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  };

  handleLanguageChange = (event) => {
    if (event.target.id) {
      this.props.dispatch(
          {
            type: Actions.SET_SESSION_LANGUAGE_CODE
            , code: event.target.id
          }
      );
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
                    <span className="App-title-full">Translation Management System</span>
                    <span className="App-title-short">TMS</span>
                  </NavItem>
                </IndexLinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                {this.props.app.session.userInfo.authenticated ?
                    <LinkContainer to="/add">
                      <NavItem className="App-nav-item" eventKey={"add"}>{<FontAwesome className="App-header-ico"  name="plus"/>} {this.props.app.session.localLabels.add.menu}</NavItem>
                    </LinkContainer>
                    : ""
                }
                {this.props.app.session.userInfo.authenticated ?
                    <NavDropdown eventKey={"edit"} title={<span><FontAwesome  className="App-header-ico" name="pencil-square-o"/> {this.props.app.session.localLabels.edit.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/editages"><NavItem className="App-submenu-item" eventKey={"edit.ages"} >{this.props.app.session.localLabels.edit.itemAges}</NavItem></LinkContainer>
                      <LinkContainer to="/editoslw"><NavItem  className="App-submenu-item" eventKey={"edit.oslw"} >{this.props.app.session.localLabels.edit.itemOslw}</NavItem></LinkContainer>
                      <LinkContainer to="/edittopic"><NavItem  className="App-submenu-item" eventKey={"edit.topic"} >{this.props.app.session.localLabels.edit.itemTopic}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.session.userInfo.authenticated ?
                    <NavDropdown eventKey={"generate"} title={<span><FontAwesome  className="App-header-ico" name="cogs"/> {this.props.app.session.localLabels.generate.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/generateages"><NavItem className="App-submenu-item" eventKey={"generate.ages"} >{this.props.app.session.localLabels.generate.itemAges}</NavItem></LinkContainer>
                      <LinkContainer to="/generateoslw"><NavItem  className="App-submenu-item" eventKey={"generate.oslw"} >{this.props.app.session.localLabels.generate.itemOslw}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.session.userInfo.authenticated ?
                    <NavDropdown eventKey={"search"} title={<span><FontAwesome  className="App-header-ico" name="search"/> {this.props.app.session.localLabels.search.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/searchlinks"><NavItem  className="App-submenu-item" eventKey={"search.links"} >{<FontAwesome className="App-header-sub-item-ico"  name="chain"/>}{this.props.app.session.localLabels.search.itemLink}</NavItem></LinkContainer>
                      <LinkContainer to="/searchnotes"><NavItem  className="App-submenu-item" eventKey={"search.notes"} >{<FontAwesome className="App-header-sub-item-ico"  name="comment-o"/>}{this.props.app.session.localLabels.search.itemNote}</NavItem></LinkContainer>
                      <LinkContainer to="/searchontology"><NavItem  className="App-submenu-item" eventKey={"search.ontology"} >{<FontAwesome className="App-header-sub-item-ico"  name="sitemap"/>}{this.props.app.session.localLabels.search.itemOntology}</NavItem></LinkContainer>
                      <LinkContainer to="/searchtext"><NavItem  className="App-submenu-item" eventKey={"search.text"} >{<FontAwesome className="App-header-sub-item-ico"  name="file-text-o"/>}{this.props.app.session.localLabels.search.itemText}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.session.userInfo.authenticated ?
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
                <NavDropdown className="App-nav-dropdown" eventKey={7} title={<Flag code={this.props.app.session.languageCode}/>} id="basic-nav-dropdown">
                  <MenuItem eventKey={7.1} id="en" onClick={this.handleLanguageChange}><Flag code="en"/></MenuItem>
                  <MenuItem eventKey={7.2} id="el" onClick={this.handleLanguageChange}><Flag code="el"/></MenuItem>
                </NavDropdown>
                {this.props.app.session.userInfo.authenticated ?
                    <NavDropdown className="App-nav-dropdown" eventKey={8} title={<FontAwesome  className="App-header-ico" name="user-o"/>} id="basic-nav-dropdown">
                      <LinkContainer to="/download"><NavItem eventKey={8.1} >{<Glyphicon glyph="download-alt"/>} {this.props.app.session.labels.header.myRecords}</NavItem></LinkContainer>
                      <LinkContainer to="/logout"><NavItem eventKey={8.1} >{<Glyphicon glyph="log-out"/>} {this.props.app.session.labels.header.logout}</NavItem></LinkContainer>
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
