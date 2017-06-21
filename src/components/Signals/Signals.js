import React from 'react'
import light from "./assets/L.png"
import nonlight from "./assets/nonL.png"
// import {
//   sgnData
// } from '../../routes/Manipulator/sigInfo/tPretureInfo.json'
import ReactTooltip from 'react-tooltip'

class Signals extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clockClassName: "clock c" + props.numw,
      ForceInSignal: this.props.ForceInSignal
    }
  }

  render() {
    var sgnDat = [
      ['容许信号', '通过信号', '引导信号', '预告信号', '复示信号', '避断信号', '推送信号', '允许预推信号'],
      ['加速预推信号', '减速预推信号', '下峰信号', '后推信号', '警示信号', '延迟信号', '较大限制信号', '较小限制信号'],
      ['复位', '实时温度操控', '接纳', '接纳传输恳求信号', '接纳中频信号正', '接纳中频信号负', '感应', '模数转换'],
      ['接纳发动', '接纳电源操控', '取样', '饱和度', '同步信道', '串行数据', '感应', '超级滤波器'],
      ['地址线', '自动增易控制', '平衡', '不平衡转换', '减速预推信号', '下峰信号', '警示信号', '延迟信号'],
      ['容许信号', '通过信号', '引导信号', '预告信号', '复示信号', '避断信号', '推送信号', '允许预推信号'],
      ['加速预推信号', '减速预推信号', '下峰信号', '后推信号', '警示信号', '延迟信号', '较大限制信号', '较小限制信号'],
      ['复位', '实时温度操控', '接纳', '接纳传输恳求信号', '接纳中频信号正', '接纳中频信号负', '感应', '模数转换'],
      ['接纳发动', '接纳电源操控', '取样', '饱和度', '同步信道', '串行数据', '感应', '超级滤波器'],
      ['地址线', '自动增易控制', '平衡', '不平衡转换', '减速预推信号', '下峰信号', '警示信号', '延迟信号'],
      ['容许信号', '通过信号', '引导信号', '预告信号', '复示信号', '避断信号', '推送信号', '允许预推信号'],
      ['加速预推信号', '减速预推信号', '下峰信号', '后推信号', '警示信号', '延迟信号', '较大限制信号', '较小限制信号'],
      ['复位', '实时温度操控', '接纳', '接纳传输恳求信号', '接纳中频信号正', '接纳中频信号负', '感应', '模数转换'],
      ['接纳发动', '接纳电源操控', '取样', '饱和度', '同步信道', '串行数据', '感应', '超级滤波器'],
      ['地址线', '自动增易控制', '平衡', '不平衡转换', '减速预推信号', '下峰信号', '警示信号', '延迟信号'],
      ['复位', '实时温度操控', '接纳', '接纳传输恳求信号', '接纳中频信号正', '接纳中频信号负', '感应', '模数转换']
    ]
    const {
      ForceInSignal,
      titleIndex
    } = this.props

    var arraySignal = [];
    for (var n = 0; n < 8; n++) {
      var item = {}
      item.id = titleIndex + "" + n
      item.sigInfo = sgnDat[titleIndex][n]
      item.Signal = (0 == (ForceInSignal.nSignal & (1 << n)) ? 0 : 1)
      arraySignal.push(item)
    }
    return (
        <span>
          {
            arraySignal.map(function (item) {
              var spanId = item.id + 'span'
              return (
                <span>
                <span id={spanId} className="sigInfo" style={{position: 'absolute', display: 'none',top: '72px', left: '63px'}}> {item.sigInfo} </span>
                  <img id={item.id} key={item.id} onClick={()=> {
                    console.log(document.getElementById(spanId).style.display == 'none')
                    return document.getElementById(spanId).style.display == 'none' ? document.getElementById(spanId).style.display = 'inline' : document.getElementById(spanId).style.display = 'none'
                                      }} src={ item.Signal == 0 ? nonlight : light } />
               </span>
              ) 
            })
          }
        </span>
      ) // return 
  }
}

export default Signals