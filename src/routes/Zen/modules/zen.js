// ------------------------------------
// Constants
// ------------------------------------
const RECEIVE_ZEN = 'RECEIVE_ZEN'
const REQUEST_ZEN = 'REQUEST_ZEN'
const CLEAR_ZEN = 'CLEAR_ZEN'

// ------------------------------------
// Actions
// ------------------------------------

function requestZen() {
  return {
    type: REQUEST_ZEN
  }
}

let avaliableId = 0
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://47.89.41.117:9011')

export const receiveZen = (value) => ({
  type: RECEIVE_ZEN,
  payload: {
    text: value,
    id: avaliableId++
  }
})

export const clearZen = () => ({
  type: CLEAR_ZEN
})

export function fetchZen() {
  return (dispatch, getState) => {
    console.log(getState().zen.fetching)
    if (getState().zen.fetching) return
    dispatch(requestZen())
    client.on('connect', function() {
      client.subscribe('TMD_GS_RunStatusDefault_Req')
    })

    client.on("message", function(topic, payload) {
      //cb(JSON.parse(payload))
      dispatch({
          type: RECEIVE_ZEN,
          payload: JSON.parse(payload)
        })
        //client.end()
    })
  }
}

export const actions = {
  requestZen,
  receiveZen,
  clearZen,
  fetchZen
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_ZEN]: (state) => {
    return ({...state,
      fetching: true
    })
  },
  [RECEIVE_ZEN]: (state, action) => {
    return ({...state,
      fetching: false,
      testRedux: action.payload.uMID,
      text: state.text.concat(action.payload)
    })
  },
  [CLEAR_ZEN]: (state) => {
    return ({...state,
      text: []
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  testRedux: '212',
  text: []
}

export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}