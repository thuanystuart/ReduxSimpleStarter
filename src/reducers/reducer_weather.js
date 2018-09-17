import { FETCH_WEATHER } from '../actions'

export default function(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_WEATHER:
      console.log(payload)
      if (payload.status == 200) {
        return [payload.data, ...state]
      } else {
        return state
      }
  }
  return state
}
