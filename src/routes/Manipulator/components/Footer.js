import React from 'react';
import Monitor from "../../../static/footer/Monitor_Tablet_32px_1178237_easyicon.net.png"
import maintain from "../../../static/footer/maintain_proper.png"
import setting from "../../../static/footer/setting.net.png"
import {
	IndexLink,
	Link
} from 'react-router'
import Clock from "../../../components/Clock"
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

export const Footer = (props) => (
	<div className={props.Component}>
		<Link className="column first" to='/Manipulator:Manipulator'><img src={Monitor} />&nbsp;监视</Link>
		<Link className="column second" to='/Manipulator:ManipulatorMaintain'><img src={maintain} />&nbsp;维护</Link>
		<Link className="column third" to='/Manipulator:ManipulatorSet'><img src={setting} />&nbsp;设定</Link>
		<Link className="column footerClock" to='#'><Clock  /> </Link>
	</div>
)

export default Footer