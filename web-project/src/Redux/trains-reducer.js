import { LoadTrains } from '../api/api'

const LOAD_TRAINS = 'trains-reducer/LOAD_TRAINS'

const InitalState = {
  trains: [],
}

const TrainsReducer = (state = InitalState, action) => {
  switch (action.type) {
    case LOAD_TRAINS: {
      return {
        ...state,
        trains: [...state.trains, ...action.trains],
      }
    }
    default: {
      return { ...state }
    }
  }
}

const LoadTrainsAction = (trains) => ({ type: ADD_CARD, trains })

export const LoadTrainsThunk = () => async (dispatch) => {
  const response = await LoadTrains.load()
  dispatch(LoadTrainsAction(response))
}

export default TrainsReducer
