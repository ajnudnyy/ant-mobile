import React, {
  Component
} from 'react'
import './Zen.scss'

import {
  Grid,
  Row,
  Col,
  Clearfix,
  ProgressBar,
  Popover,
  OverlayTrigger,
  popoverBottom,
  Label
} from 'react-bootstrap'

import {
  Modal,
  Button,
  Tabs,
  Icon,
  Slider,
  Switch
} from 'antd'

import {
  tl_Subscribe_Handle
} from '../../../action/tl_mqtt'
import Footer from './Footer'
import LedMun from '../../../components/LedMun/LedMun'
import light from "../assets/Checkbox_Empty.net.png"
import nonlight from "../assets/NonCheckbox_Empty.net.png"
import point from "../assets/point.net.png"
import temperature from "../assets/temperature.net.png"
import running from "../assets/running.png"

export default class Zen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tempretrueo: 0,
      tempretrue1: 0,
      tempretrue2: 0,
      tempretrue3: 0,
      tempretrue4: 0
    }

    let seft = this;
    tl_Subscribe_Handle('TOP-LINK/TMD_TEST/TEST', function(payload) {
      seft.setState({
        tempretrueo: payload.tempretrue,
        tempretrue1: payload.tempretrue1,
        tempretrue2: payload.tempretrue2,
        tempretrue3: payload.tempretrue3,
        tempretrue4: payload.tempretrue4
      })
    })


  }

  componentWillMount() {

  }


  render() {
    const {
      tempretrueo,
      tempretrue1,
      tempretrue2,
      tempretrue3,
      tempretrue4
    } = this.state
    return (
      <div className="zen">
        <Grid>
          <Row>
            <Col xs={9} md= {10} style={{left: '5%'}}>
              <Row className = "show-grid" style={{fontSize: '38px', marginTop: '-12%'}}>
                <Col xs={18} md={12} style={{height: '318px'}}>
                  
                  {
                    //<LedMun numw={88} />
                    // <LedMun numw={7} />
                    // <LedMun numw={8} />
                    // <img src={point} />
                    // <LedMun numw={9} />
                  }
                  
                  <span className="temp1"> {tempretrueo}</span>
                  <img style={{position: 'absolute', top: '27%'}} src={temperature} />
                  出媒
                </Col>
              </Row>
              <Row className = "show-grid" style={{fontSize: '31px', margin: '3% -15px'}}>
                <Col xs={6} md={4} >
                  <div>回媒 {tempretrue2} &#8451;</div>
                </Col>
                <Col xs={6} md={4} >
                  <div>功耗: {tempretrue3} wk</div>
                </Col>
                <Col xs={6} md={4} >
                  <div>运行中...</div>
                </Col>
              </Row>
              <Row className = "show-grid" style={{fontSize: '31px', margin: '3% -15px'}}>
                <Col xs={6} md={4} >
                  <div>设定 {tempretrue4} &#8451;</div>
                </Col>
                <Col xs={6} md={4} >
                  <div>压力: 88.8MPa</div>
                </Col>
                <Col xs={6} md={4} >
                  <div><img src={running} /></div>
                </Col>
              </Row>
              <Row className="show-grid" style={{fontSize: '31px', margin: '3% -15px'}}>
                <Col xs={6} md={4}>
                  <div>流量: 88.8L/min</div>
                </Col>
              </Row>
            </Col> 
            <Col xs={9} md = {2} style={{textAlign: 'center', fontSize: 'x-large'}}> 
              <img src={nonlight}/>
              <div>加热</div>
              <img src={light}/>
              <div>冷却</div>
              <img src={nonlight}/>
              <div>主泵</div>
              <img src={nonlight}/>
              <div>清模</div>
              <img src={light}/>
              <div>泄压</div>
              <img src={light}/>
              <div>增压</div>
            </Col>
          </Row>
        </Grid> 
      <Footer Component="Manipulatorfooter Manipulator"/>
     </div>
    )
  }
}

Zen.propTypes = {
  zen: React.PropTypes.object.isRequired
}