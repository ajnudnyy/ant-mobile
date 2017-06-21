import {
	connect
} from 'react-redux'
import {
	fetchZen
} from './../modules/zen'

import Zen from '../components/Zen'

const mapDispatchtoProps = {
	fetchZen
}

const mapStateToProps = (state) => ({
	zen: state.zen
})

export default connect(mapStateToProps, mapDispatchtoProps)(Zen)