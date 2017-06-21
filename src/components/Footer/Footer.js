import React from 'react';
import {
  Navbar,
  MenuItem,
  Nav,
  NavItem,
  NavDropdown
} from 'react-bootstrap';
import {
  IndexLink,
  Link
} from 'react-router'
import './Footer.scss'
import Clock from '../Clock'
import TabsControl from '../TabControl/TabControl'

export const Footer = () => (
  // <Navbar className="footer-bottom">
  //   <Navbar.Header>
  //     <Navbar.Brand>
  //       <a href="#">Brand</a>
  //     </Navbar.Brand>
  //   </Navbar.Header>
  //   <Navbar.Collapse>
  //     <Navbar.Text pullRight>
  //       <Clock />
  //     </Navbar.Text>
  //   </Navbar.Collapse>
  // </Navbar>

  <div className="footer">
    <div className="container">
      <TabsControl>
        <div name = "first">
            第一帧
        </div>
        <div name = "second">
            第二帧
        </div>
        <div name = "third">
            第三帧
        </div>
      </TabsControl>
    </div>
  </div>
)

export default Footer