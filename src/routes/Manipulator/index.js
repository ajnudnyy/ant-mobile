import {
	injectReducer
} from '../../store/reducers'
import {
	praseRoute
} from '../../action/praseRoute'
const reducer = require('./modules/Manipulator').default

export default (store) => ({
	path: 'Manipulator:type',
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			var locname = praseRoute(location.pathname);
			const Manipulator = require('./components/' + locname + '').default
			injectReducer(store, {
				key: 'manipulator',
				reducer
			})
			cb(null, Manipulator)
		})
	}
})