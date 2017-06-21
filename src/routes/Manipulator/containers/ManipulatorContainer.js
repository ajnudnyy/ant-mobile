import {
	connect
} from 'react-redux'
import {
	fetchManipulator,
	clearManipulator,
	fetch_ProdPross
} from './../modules/Manipulator'

import Manipulator from '../components/Manipulator'

const mapDispatchtoProps = {
	fetchManipulator,
	clearManipulator,
	fetch_ProdPross: () => fetch_ProdPross(1)
}

const mapStateToProps = (state) => ({
	gotprodPross: state.gotprodPross
})

export default connect(mapStateToProps, mapDispatchtoProps)(Manipulator)