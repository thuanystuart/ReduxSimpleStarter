import { FETCH_WEATHER } from '../actions'

export default (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_WEATHER:
      if (payload.status == 200) {
        return [payload.data, ...state]
      } else {
        return state
      }
  }
  return state
}
