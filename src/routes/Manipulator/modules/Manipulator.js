// ------------------------------------
// Constants
// ------------------------------------
const MQTT_Manipulator = 'MQTT_Manipulator'
const RECEIVE_Manipulator = 'RECEIVE_Manipulator'
const REQUEST_Manipulator = 'REQUEST_Manipulator'
const CLEAR_Manipulator = 'CLEAR_Manipulator'
const FETCH_ProdPross = 'FETCH_ProdPross'

// ------------------------------------
// Actions
// ------------------------------------

function mqttManipulator() {
  return {
    type: MQTT_Manipulator
  }
}

function requestManipulator() {
  return {
    type: REQUEST_Manipulator
  }
}

let avaliableId = 0
export const receiveManipulator = (value) => ({
  type: RECEIVE_Manipulator,
  payload: {
    text: value,
    id: avaliableId++
  }
})

export const clearManipulator = () => ({
  type: CLEAR_Manipulator
})

export function fetch_ProdPross(value = 1) {
  return {
    type: FETCH_ProdPross,
    payload: value
  }
}

export const actions = {
  requestManipulator,
  receiveManipulator,
  clearManipulator,
  fetch_ProdPross,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_Manipulator]: (state) => {
    return ({...state,
      fetching: true
    })
  },
  [RECEIVE_Manipulator]: (state, action) => {
    return ({...state,
      fetching: false,
      text: state.text.concat(action.payload)
    })
  },
  [CLEAR_Manipulator]: (state) => {
    return ({...state,
      text: []
    })
  },
  [FETCH_ProdPross]: (state, action) => {
    const gotprodPross = state.gotprodPross
    return ({
      gotprodPross: gotprodPross + action.payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  text: [],
  values: [96, 2, 2],
  prodCount: 0,
  gotprodPross: 0,
  defectRate: 1,
  okRate: 1
}

export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}