import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Flag} from 'ioc-liturgical-react';
import auth from './Auth';
import FontAwesome from 'react-fontawesome';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: {
        paratexts: {
          menu: "Parallel Texts"
        }
        , texts: {
          menu: "Text Parts"
          , itemNew: "New Text Part"
          , itemSearch: "Search Text Parts"
        }
        , notes: {
          menu: "Notes"
          , itemNew: "New Note"
          , itemSearch: "Search Notes"
        }
        , links: {
          menu: "Text Links"
          , itemNew: "New Text Link"
          , itemSearch: "Search Text Links"
        }
      }
    }

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  };

  handleLanguageChange = (event) => {
    if (event.target.id) {
      this.props.changeHandler(event.target.id);
      event.preventDefault();
    }
  };

  render() {
    return (
        <div className="App-header">
          <Navbar fluid fixedTop inverse collapseOnSelect>
            <Navbar.Header >
              <Navbar.Brand>
                <LinkContainer to="/home">
                  <NavItem eventKey={"home"}>
                    <span className="App-title">Translation Management System</span>
                  </NavItem>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                {auth.isAuthenticated() ?
                  <NavDropdown eventKey={"texts"} title={<span><FontAwesome name="list-ul"/> {this.state.labels.texts.menu}</span>} id="notes-nav-dropdown">
                  <LinkContainer to="/textparts"><NavItem  className="App-submenu-item" eventKey={"text.new"} >{<FontAwesome className="App-header-ico"  name="plus"/>}{this.state.labels.texts.itemNew}</NavItem></LinkContainer>
                  <LinkContainer to="/searchtextparts"><NavItem  className="App-submenu-item" eventKey={"text.search"} >{<FontAwesome className="App-header-ico"  name="search"/>}{this.state.labels.texts.itemSearch}</NavItem></LinkContainer>
                  </NavDropdown>
                    :
                    ""
                }
                {auth.isAuthenticated() ?
                    <LinkContainer to="/paratexts">
                      <NavItem eventKey={"paratexts"}>{<FontAwesome  className="App-header-ico" name="columns"/>} {this.state.labels.paratexts.menu}</NavItem>
                    </LinkContainer>
                    :
                    ""
                }
                {auth.isAuthenticated() ?
                    <NavDropdown eventKey={"notes"} title={<span><FontAwesome name="pencil-square-o"/> {this.state.labels.notes.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/notes"><NavItem className="App-submenu-item" eventKey={"notes.new"} >{<FontAwesome className="App-header-ico"  name="plus"/>}{this.state.labels.notes.itemNew}</NavItem></LinkContainer>
                      <LinkContainer to="/notesSearch"><NavItem  className="App-submenu-item" eventKey={"notes.search"} >{<FontAwesome className="App-header-ico"  name="search"/>}{this.state.labels.notes.itemSearch}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {auth.isAuthenticated() ?
                    <NavDropdown eventKey={"links"} title={<span><FontAwesome name="chain"/> {this.state.labels.links.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/links"><NavItem  className="App-submenu-item" eventKey={"links.new"} >{<FontAwesome className="App-header-ico"  name="plus"/>}{this.state.labels.links.itemNew}</NavItem></LinkContainer>
                      <LinkContainer to="/linksSearch"><NavItem  className="App-submenu-item" eventKey={"links.search"} >{<FontAwesome className="App-header-ico"  name="search"/>}{this.state.labels.links.itemSearch}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {auth.isAuthenticated() ?
                    <LinkContainer to="/browser">
                      <NavItem eventKey={"browser"}>{<FontAwesome  className="App-header-ico" name="database"/>} {this.props.labels.browser}</NavItem>
                    </LinkContainer>
                    :
                    ""
                }
                <LinkContainer to="/about">
                  <NavItem eventKey={"about"}>{<FontAwesome className="App-header-ico" name="info-circle"/>} {this.props.labels.about}</NavItem>
                </LinkContainer>
                {auth.isAuthenticated() ?
                    <LinkContainer to="/help">
                      <NavItem eventKey={"help"}>{<FontAwesome className="App-header-ico"  name="question-circle"/>} {this.props.labels.help}</NavItem>
                    </LinkContainer>
                    :
                    ""
                }
                <NavDropdown eventKey={"lang"} title={<Flag code={this.props.language}/>} id="basic-nav-dropdown">
                  <MenuItem eventKey={"lang.en"} id="en" onClick={this.handleLanguageChange}><Flag code="en"/></MenuItem>
                  <MenuItem eventKey={"lang.el"} id="el" onClick={this.handleLanguageChange}><Flag code="el"/></MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={"user"} title={<FontAwesome name="user-o"/>} id="basic-nav-dropdown">
                  {! auth.isAuthenticated() ?
                      <LinkContainer to="/login"><NavItem  className="App-submenu-item" eventKey={"user.login"} >{<FontAwesome className="App-header-ico"  name="sign-in"/>}{this.props.labels.login}</NavItem></LinkContainer>
                      : <LinkContainer to="/logout"><NavItem  className="App-submenu-item" eventKey={"user.logout"} >{<FontAwesome className="App-header-ico"  name="sign-out"/>}{this.props.labels.logout}</NavItem></LinkContainer>
                  }
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
  }
}

export default Header;

