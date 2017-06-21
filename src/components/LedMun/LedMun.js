import React from 'react'
import './LedMun.scss'

class LedMun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ledName: "clock c" + this.props.numw
    };
  }

  render() {
    const {
      numw
    } = this.props
    return (
      <div className={"clock c" + numw}>
        <div className="v n1"><div className="u"></div><div className="d"></div></div>
        <div className="v n2"><div className="u"></div><div className="d"></div></div>
        <div className="h n3"><div className="l"></div><div className="r"></div></div>
        <div className="v n4"><div className="u"></div><div className="d"></div></div>
        <div className="v n5"><div className="u"></div><div className="d"></div></div>
        <div className="h n6"><div className="l"></div><div className="r"></div></div>
        <div className="h n7"><div className="l"></div><div className="r"></div></div>
      </div>
    )
  }
}

export default LedMun