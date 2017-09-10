import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import {Flag} from 'ioc-liturgical-react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import Actions from '../../reducers/actionTypes';

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
            type: Actions.LANGUAGE_SET_CODE
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
                    <span className="App-title">IOC Translation Management System</span>
                  </NavItem>
                </IndexLinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                {this.props.app.user.authenticated ?
                    <LinkContainer to="/add">
                      <NavItem eventKey={"add"}>{<FontAwesome className="App-header-ico"  name="plus"/>} {this.props.app.language.localLabels.add.menu}</NavItem>
                    </LinkContainer>
                    : ""
                }
                {this.props.app.user.authenticated ?
                    <NavDropdown eventKey={"edit"} title={<span><FontAwesome name="pencil-square-o"/> {this.props.app.language.localLabels.edit.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/editages"><NavItem className="App-submenu-item" eventKey={"edit.ages"} >{this.props.app.language.localLabels.edit.itemAges}</NavItem></LinkContainer>
                      <LinkContainer to="/editoslw"><NavItem  className="App-submenu-item" eventKey={"edit.oslw"} >{this.props.app.language.localLabels.edit.itemOslw}</NavItem></LinkContainer>
                      <LinkContainer to="/edittopic"><NavItem  className="App-submenu-item" eventKey={"edit.topic"} >{this.props.app.language.localLabels.edit.itemTopic}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.user.authenticated ?
                    <NavDropdown eventKey={"generate"} title={<span><FontAwesome name="cogs"/> {this.props.app.language.localLabels.generate.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/generateages"><NavItem className="App-submenu-item" eventKey={"generate.ages"} >{this.props.app.language.localLabels.generate.itemAges}</NavItem></LinkContainer>
                      <LinkContainer to="/generateoslw"><NavItem  className="App-submenu-item" eventKey={"generate.oslw"} >{this.props.app.language.localLabels.generate.itemOslw}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.user.authenticated ?
                    <NavDropdown eventKey={"search"} title={<span><FontAwesome name="search"/> {this.props.app.language.localLabels.search.menu}</span>} id="notes-nav-dropdown">
                      <LinkContainer to="/searchlinks"><NavItem  className="App-submenu-item" eventKey={"search.links"} >{<FontAwesome className="App-header-ico"  name="chain"/>}{this.props.app.language.localLabels.search.itemLink}</NavItem></LinkContainer>
                      <LinkContainer to="/searchnotes"><NavItem  className="App-submenu-item" eventKey={"search.notes"} >{<FontAwesome className="App-header-ico"  name="comment-o"/>}{this.props.app.language.localLabels.search.itemNote}</NavItem></LinkContainer>
                      <LinkContainer to="/searchontology"><NavItem  className="App-submenu-item" eventKey={"search.ontology"} >{<FontAwesome className="App-header-ico"  name="sitemap"/>}{this.props.app.language.localLabels.search.itemOntology}</NavItem></LinkContainer>
                      <LinkContainer to="/searchtext"><NavItem  className="App-submenu-item" eventKey={"search.text"} >{<FontAwesome className="App-header-ico"  name="file-text-o"/>}{this.props.app.language.localLabels.search.itemText}</NavItem></LinkContainer>
                    </NavDropdown>
                    :
                    ""
                }
                {this.props.app.user.authenticated ?
                    <LinkContainer to="/admin">
                      <NavItem eventKey={5}>{<FontAwesome className="App-header-ico"  name="lock"/>}{"Administer"}</NavItem>
                    </LinkContainer>
                    : ""
                }
                <LinkContainer to="/about">
                  <NavItem eventKey={4}>{<FontAwesome className="App-header-ico" name="info-circle"/>}{this.props.app.language.labels.header.about}</NavItem>
                </LinkContainer>
                <LinkContainer to="/help">
                  <NavItem eventKey={6}>{<FontAwesome className="App-header-ico"  name="question-circle"/>}{this.props.app.language.labels.header.help}</NavItem>
                </LinkContainer>
                <NavDropdown eventKey={7} title={<Flag code={this.props.app.language.code}/>} id="basic-nav-dropdown">
                  <MenuItem eventKey={7.1} id="en" onClick={this.handleLanguageChange}><Flag code="en"/></MenuItem>
                  <MenuItem eventKey={7.2} id="el" onClick={this.handleLanguageChange}><Flag code="el"/></MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={8} title={<FontAwesome name="user-o"/>} id="basic-nav-dropdown">
                  {! this.props.app.user.authenticated ?
                      <LinkContainer to="/login"><NavItem eventKey={7.1} >{<FontAwesome className="App-header-ico"  name="sign-in"/>}{this.props.app.language.labels.header.login}</NavItem></LinkContainer>
                      : <LinkContainer to="/logout"><NavItem eventKey={7.1} >{<FontAwesome className="App-header-ico"  name="sign-out"/>}{this.props.app.language.labels.header.logout}</NavItem></LinkContainer>
                  }
                </NavDropdown>
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
