import React from 'react';
import Icon from 'react-geomicons';
import {
  Grid,
  Row,
  Col,
  Clearfix,
  Label
} from 'react-bootstrap'

import {
  IndexLink,
  Link
} from 'react-router'
import './Header.scss'
import exitIcon from '../../static/exit.png'
import loading from '../../static/loading.png'
import TOPLOGO from '../../static/TOP-STAR-LOGO.png'

export const Header = () => (
  <div className="Header"> 
    <Grid>
      <Row className="show-grid">
        <Col xs={4} md={2} style={{textAlign: 'center'}}><img className="logoImg" src={TOPLOGO} /></Col>
        <Col xs={2} md={1} style={{textAlign: 'center'}}><Link className="column first" to='/Manipulator:Manipulator'>机械手</Link></Col>
        <Col xs={2} md={1} style={{textAlign: 'center'}}><Link className="column second" to='/Zen'>模温机</Link></Col>
        <Col xs={2} md={1} style={{textAlign: 'center'}}><Link className="column third" to='/Manipulator:ManipulatorSet'>设定</Link></Col>
        <Col xs={2} md={1} style={{textAlign: 'center'}} mdOffset={4}>
          <Link className="column second setting" to='/Manipulator:ManipulatorMaintain'>
            <svg viewBox="0 0 64 64" width="34" height="28" fill="currentcolor">
              <path d="M 28.053176443624363 0 L 35.94682355637564 0 L 37.86768066444777 10.796926552500324 A 22 22 0 0 1 42.84376022905525 12.858086195608351 L 51.8365912971095 6.5817573011704615 L 57.41824269882954 12.1634087028905 L 51.14191380439165 21.156239770944754 A 22 22 0 0 1 53.203073447499676 26.132319335552236 L 64 28.053176443624363 L 64 35.94682355637564 L 53.203073447499676 37.86768066444777 A 22 22 0 0 1 51.14191380439165 42.84376022905525 L 57.41824269882954 51.8365912971095 L 51.8365912971095 57.41824269882954 L 42.84376022905525 51.14191380439165 A 22 22 0 0 1 37.86768066444777 53.203073447499676 L 35.94682355637564 64 L 28.053176443624363 64 L 26.13231933555224 53.203073447499676 A 22 22 0 0 1 21.15623977094475 51.14191380439165 L 12.1634087028905 57.41824269882954 L 6.5817573011704615 51.8365912971095 L 12.858086195608351 42.84376022905525 A 22 22 0 0 1 10.796926552500327 37.867680664447775 L 0 35.94682355637565 L 0 28.05317644362437 L 10.79692655250032 26.132319335552246 A 22 22 0 0 1 12.858086195608351 21.156239770944744 L 6.581757301170455 12.163408702890502 L 12.163408702890493 6.581757301170461 L 21.156239770944747 12.858086195608351 A 22 22 0 0 1 26.132319335552232 10.796926552500324 M 32 21 A 11 11 0 0 0 32 43 A 11 11 0 0 0 32 21"></path>
            </svg>
          </Link>
        </Col>
        <Col xs={2} md={1} style={{textAlign: 'center'}}>
          <Link className="column third exit" to='/Manipulator:ManipulatorSet'>
            <img width={30} height={30} src={exitIcon} alt={loading}/>
          </Link>
        </Col>
      </Row> 
    </Grid>
  </div>
)

export default Header
