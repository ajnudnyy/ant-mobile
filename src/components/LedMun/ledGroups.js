import React from 'react'
import LedMun from './LedMun'

class LedGroups extends React.Component {

  static defaultProps = {
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

  constructor(props) {
    super(props);
    this.state = {
      numw: this.props.numw,
      tlength: this.props.tlength
    }
  }

  render() {
    var newcount = (Array(this.props.tlength).join('0') + this.props.numw).slice(-this.props.tlength)
    const tCount = newcount.split('')
    var arraynum = []
    for (var n = 0; n < tCount.length; n++) {
      var item = {}
      item.id = n
      item.num = tCount[n]
      arraynum.push(item)
    }

    return (
      <div>
        {
          arraynum.map(function (item) {
            return <LedMun key={item.id} numw={item.num}/>
          })
        }
      </div>
    )
  }
}

export default LedGroups