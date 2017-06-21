import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

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
  Button,
  Tabs,
  Icon
} from 'antd'
import Gauge from 'react-gauge'
import {
  tl_Subscribe_Handle
} from '../../../action/tl_mqtt'
import LedGroups from '../../../components/LedMun/LedGroups'
import Running from '../assets/running.png'
import examplechart from '../assets/examplechart.jpg'
import Signals from '../../../components/Signals/Signals'
import Footer from './Footer'
import light from "../assets/Checkbox_Empty.net.png"
import nonlight from "../assets/NonCheckbox_Empty.net.png"
import './Manipulator.scss'

export default class Manipulator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values: [96, 2, 2],
      uMID: '',
      uDateTime64_UTC: '',
      strMoldName: '',
      nProductCount: '',
      nSuccessRate: '',
      nFailedRate: '',
      uEstimateFinishDateTime64_UTC: '',
      nOneTimeProductCount: '',
      nPopCount: 32,
      nFetchCount: '',
      arrForceInSignal: [],
      arrForceOutSignal: []
    }

    let seft = this;
    tl_Subscribe_Handle('TOP-LINK/TMD_TEST/TEST', function(payload) {
      var _TMD_GS_RunStatus = payload.TMD_GS_RunStatusDefault[0]
      seft.setState({
        uMID: _TMD_GS_RunStatus.uMID,
        uDateTime64_UTC: _TMD_GS_RunStatus.uDateTime64_UTC,
        strMoldName: _TMD_GS_RunStatus.strMoldName,
        nProductCount: _TMD_GS_RunStatus.nProductCount,
        nSuccessRate: _TMD_GS_RunStatus.nSuccessRate,
        nFailedRate: _TMD_GS_RunStatus.nFailedRate,
        uEstimateFinishDateTime64_UTC: _TMD_GS_RunStatus.uEstimateFinishDateTime64_UTC,
        nOneTimeProductCount: _TMD_GS_RunStatus.nOneTimeProductCount,
        nPopCount: _TMD_GS_RunStatus.nPopCount,
        nFetchCount: _TMD_GS_RunStatus.nFetchCount,
        arrForceInSignal: _TMD_GS_RunStatus.arrForceInSignal,
        arrForceOutSignal: _TMD_GS_RunStatus.arrForceOutSignal
      })
    })

    //交互数据测试
    setInterval(function() {
      seft.setState({
        uMID: '222222',
        uDateTime64_UTC: '34534543',
        strMoldName: '机械手',
        nProductCount: parseInt(Math.random() * (99 - 60 + 1) + 60),
        nPopCount: parseInt(Math.random() * (2000 - 100 + 1) + 100),
        nSuccessRate: parseInt(Math.random() * (99 - 5 + 1) + 2),
        nFailedRate: parseInt(Math.random() * (99 - 5 + 1) + 2),
        uEstimateFinishDateTime64_UTC: '2017-06-30',
        nOneTimeProductCount: 85,
        nFetchCount: 21,
        arrForceInSignal: [{
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }, {
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }, {
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }, {
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }],
        arrForceOutSignal: [{
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }, {
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }, {
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }, {
          nSignal: parseInt(Math.random() * (20 - 2 + 1) + 2)
        }]
      })
      console.log('推送机械手数据')
    }, 2000)

    this.tooltipLine = this.tooltipLine.bind(this);
  }

  componentDidMount() {
    var dat = {
      strParam: "aa"
    }

    // postRequest("http://127.0.0.1:8082/resHandler.ashx", {
    //   key: '12'
    // }, function(res) {
    //   console.log(res);
    // })

    // fetchRequest("http://127.0.0.1:8082/resHandler.ashx", 'add', {
    //     key: '12'
    //   },
    //   function(res) {
    //     var obj = JSON.parse(res);
    //     console.log(obj.name);
    //   })
  }

  componentWillUnmount() {
    //clearInterval(this.interval)
  }

  tooltipLine(label, data) {
    return label + " x: " + data.x + " y: " + data.y;
  }

  render() {
    const {
      uMID,
      uDateTime64_UTC,
      strMoldName,
      nProductCount,
      nSuccessRate,
      nFailedRate,
      uEstimateFinishDateTime64_UTC,
      nOneTimeProductCount,
      nPopCount,
      nFetchCount,
      arrForceInSignal,
      arrForceOutSignal
    } = this.state
    const TabPane = Tabs.TabPane
    return (
      <div className= "HomeView">
        <Grid>
          <Row className='statesFosize row-view'>
            <Col xs={9} md={6}>
              生产任务: TSA-9810126
            </Col>
            <Col xs={9} md={6}>
              预计完成时间： {
                uEstimateFinishDateTime64_UTC
              }
            </Col>
          </Row>
          <Row className="show-grid sch_gd statesFosize row-view">
            <Col xs={4} md={2} className="clearPaddright">生产进度: </Col> 
            <Col xs = {14} md = {10} className="paddingtop2 clearPaddleft" > 
              <ProgressBar now={nProductCount} label={`${nProductCount}%`} />
            </Col> 
          </Row>
          <Row className="show-grid row-view">
            <Col xs={9} md={6} className="clearfix">
            <Row className="font24">
              <Col xs={18} md={12}>模具名称: {strMoldName}</Col>
            </Row>
            <Row className="font42">
              <Col xs={18} md={12} style={{marginBottom: '-46px', marginTop: '10px'}}><img className="runImg" src={Running} /> 运行中 (手动) </Col>
            </Row>
            <Row className="marginBottom2" style={{textAlign:'center'}}>
              <Col xs={9} md={6}>
                <Gauge className="gaugeWidth" 
                        value={nSuccessRate} 
                        gradient={[
                        {p: 0, color: "#ff0000"},
                        {p: 50, color: "#ffff00"},
                        {p: 75, color: "#ffc107"},
                        {p: 100, color: "#00920b"},]} 
                        width="240"
                        height="190"
                        key='gauge-1'/>
                <Label bsStyle="info" className="rate_font">达成率</Label>
              </Col>
              <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
              <Col xs={9} md={6} style={{textAlign:'center'}}> 
                <Gauge className="gaugeWidth" 
                       value={nFailedRate} 
                       gradient={[
                        {p: 0, color: "#ff0000"},
                        {p: 20, color: "#ffff00"},
                        {p: 75, color: "#ffc107"},
                        {p: 100, color: "#00920b"},]}
                        width="240"
                        height="190" key='gauge-2'/>
                <Label bsStyle="info" className="rate_font">不良率</Label>&nbsp;
              </Col>
            </Row>
            <Row className="font24">
              <Col xs={18} md={12}>
                <div style={{padding: '4%'}}> 注塑周期: 30s </div>
                <ProgressBar>
                  <ProgressBar striped bsStyle="success" now={35} key={1} />
                  <ProgressBar bsStyle="warning" now={20} key={2} />
                  <ProgressBar active bsStyle="danger" now={10} key={3}/>
                </ProgressBar>
              </Col>
            </Row>
            </Col> <Col xs = {9} md = {6} className="">
              <Row className="">
                <Col xs={18} md={12}>
                  <div>
                    { 
                      //<LedMun numw={88} />
                      //<LedMun numw={7} />
                      //<LedMun numw={8} />
                      //<LedMun numw={9} />
                    }
                    <LedGroups numw={this.state.nPopCount} tlength={4} />
                  </div>
                  <div className="prod_count">生产个数</div>
                </Col>
              </Row>
              <Row className="" style={{height: '259px'}}>
                <Col xs={12} md={18}>
                  <Tabs defaultActiveKey="2">
                    <TabPane className="statesChart" tab={<span><Icon type="area-chart" />运行统计</span>} key="1">
                      <div style={{width:'33%', float: 'left',marginLeft: '24px',marginRight: '35px'}}>
                      <div style={{padding:'7px 0px'}}><Label bsStyle="primary">一次制品数</Label> <span style={{float:'right'}}>{nOneTimeProductCount}</span>  </div>
                      <div style={{padding:'7px 0px'}}><Label bsStyle="primary">去&nbsp;除&nbsp;次&nbsp;数</Label> <span style={{float:'right'}}>{nFetchCount}  </span></div>
                      <div style={{padding:'7px 0px'}}><Label bsStyle="primary">取&nbsp;出&nbsp;个&nbsp;数</Label> <span style={{float:'right'}}>{nPopCount} </span> </div>
                      <div style={{padding:'7px 0px'}}><Label bsStyle="primary">总&nbsp;&nbsp;&nbsp;计&nbsp;&nbsp;&nbsp;数</Label> <span style={{float:'right'}}>{nOneTimeProductCount}</span> </div>
                      </div>
                      <div>
                      </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="environment-o" />轴位置</span>} key="2" style={{padding: '0px 45px'}}>
                      <div style={{width:'26%', float: 'left',marginLeft: '24px',marginRight: '35px'}}>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">X轴</Label> <span style={{}}>4515</span>  </div>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">Y轴</Label> <span style={{}}>545  </span></div>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">3轴</Label> <span style={{}}>4654 </span> </div>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">4轴</Label> <span style={{}}>25485</span> </div>
                      </div>  
                      <div style={{width:'33%', float: 'right',marginLeft: '24px',marginRight: '35px'}}>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">5轴</Label> <span style={{}}>4515</span>  </div>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">6轴</Label> <span style={{}}>545  </span></div>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">7轴</Label> <span style={{}}>4654 </span> </div>
                        <div style={{padding:'5px 0px'}}><Label bsStyle="primary">8轴</Label> <span style={{}}>25485</span> </div>
                      </div> 
                    </TabPane>
                    <TabPane tab={<span><Icon type="retweet" />I/O信号</span>} key="3">
                      <div className="outSignal" style={{width:'100%', height: '100%'}}>
                        <div style={{width:'48%', float: 'left'}}>
                          <div style={{width: '100%', textAlign:'center'}}>入力信号</div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">01-08</Label> <Signals titleIndex={0} ForceInSignal={arrForceInSignal[0]} /> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">09-16</Label> <Signals titleIndex={1} ForceInSignal={arrForceInSignal[1]} /> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">17-24</Label> <Signals titleIndex={2} ForceInSignal={arrForceInSignal[2]} /> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">25-32</Label> <Signals titleIndex={3} ForceInSignal={arrForceInSignal[3]} /> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">33-40</Label> <Signals titleIndex={4} ForceInSignal={arrForceInSignal[0]} /> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">41-48</Label> <Signals titleIndex={5} ForceInSignal={arrForceInSignal[1]} /> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">49-56</Label> <Signals titleIndex={6} ForceInSignal={arrForceInSignal[2]} /> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">57-64</Label> <Signals titleIndex={7} ForceInSignal={arrForceInSignal[3]} /> <span style={{float:'right'}}></span></div>
                        </div>
                        <div style={{width:'48%',float: 'right'}}>
                          <div style={{width: '100%', textAlign:'center'}}>出力信号</div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">01-08</Label> <Signals titleIndex={8} ForceInSignal={arrForceOutSignal[0]}/> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">09-16</Label> <Signals titleIndex={9} ForceInSignal={arrForceOutSignal[1]}/> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">17-24</Label> <Signals titleIndex={10} ForceInSignal={arrForceOutSignal[2]}/> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">25-32</Label> <Signals titleIndex={11} ForceInSignal={arrForceOutSignal[3]}/> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">33-40</Label> <Signals titleIndex={12} ForceInSignal={arrForceOutSignal[0]}/> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">41-48</Label> <Signals titleIndex={13} ForceInSignal={arrForceOutSignal[1]}/> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">49-56</Label> <Signals titleIndex={14} ForceInSignal={arrForceOutSignal[2]}/> <span style={{float:'right'}}></span></div>
                          <div style={{padding:'0px 4px'}}><Label bsStyle="primary">57-64</Label> <Signals titleIndex={15} ForceInSignal={arrForceOutSignal[3]}/> <span style={{float:'right'}}></span></div>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Footer Component="Manipulatorfooter Manipulator"/>
      </div>
    )
  }
}